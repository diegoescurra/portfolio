
import fs from "node:fs/promises";
import path from "node:path";
import OpenAi from "openai";
import { pathToFileURL } from "node:url";
import { createClient } from "@supabase/supabase-js";

process.loadEnvFile();

const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY,
})

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SECRET_KEY
)

const KNOWLEDGE_DIR = path.join(process.cwd(), "knowledge");

export function chunkText(text, maxLength = 1200, overlapLength = 200) {
    const blocks = text
        .split(/\n\s*\n/)
        .map((block) => block.trim())
        .filter(Boolean);

    const chunks = [];
    let headings = [];
    let currentContent = "";
    let pendingOverlap = "";

    const formatHeadings = () => headings
        .map(({ level, value }) => `${"#".repeat(level)} ${value}`)
        .join("\n");

    const contentLimit = () => {
        // Reserve space for the active Markdown headings that give every chunk its context.
        return Math.max(300, maxLength - formatHeadings().length - 2);
    };

    const createChunk = (content) => {
        const context = formatHeadings();
        return context ? `${context}\n\n${content}` : content;
    };

    const getOverlap = (content) => {
        if (content.length <= overlapLength) return content;

        const tail = content.slice(-overlapLength);
        const firstSentenceEnd = tail.search(/[.!?]\s/);

        // Start at a full sentence when possible, instead of beginning midway through a word.
        return (firstSentenceEnd >= 0 ? tail.slice(firstSentenceEnd + 1) : tail).trim();
    };

    const flush = (keepOverlap = false) => {
        if (!currentContent) return;

        if (keepOverlap) {
            pendingOverlap = getOverlap(currentContent);
        }

        chunks.push(createChunk(currentContent));
        currentContent = "";
    };

    const splitLongBlock = (block, limit) => {
        const pieces = [];
        let remaining = block.trim();

        while (remaining.length > limit) {
            const excerpt = remaining.slice(0, limit + 1);
            const sentenceMatches = [...excerpt.matchAll(/[.!?](?=\s|$)/g)];
            const sentenceBoundary = sentenceMatches.at(-1)?.index + 1 || 0;
            const lineBoundary = remaining.lastIndexOf("\n", limit);
            const wordBoundary = remaining.lastIndexOf(" ", limit);

            // Prefer a complete sentence. Fall back to a line or word only when needed.
            const cutAt = sentenceBoundary > limit * 0.55
                ? sentenceBoundary
                : Math.max(lineBoundary, wordBoundary);

            // A single word or URL can exceed the target size, so make guaranteed progress.
            const safeCutAt = cutAt > 0 ? cutAt : limit;
            pieces.push(remaining.slice(0, safeCutAt).trim());
            remaining = remaining.slice(safeCutAt).trim();
        }

        if (remaining) pieces.push(remaining);
        return pieces;
    };

    const appendBlock = (block) => {
        const limit = contentLimit();

        if (!currentContent) {
            const overlap = pendingOverlap ? `Contexto previo: ${pendingOverlap}` : "";
            pendingOverlap = "";

            // Keep the overlap only when it leaves enough room for the incoming content.
            if (overlap && overlap.length + 2 + block.length <= limit) {
                currentContent = `${overlap}\n\n${block}`;
                return;
            }
        }

        const separator = currentContent ? "\n\n" : "";
        if (currentContent.length + separator.length + block.length <= limit) {
            currentContent += `${separator}${block}`;
            return;
        }

        if (currentContent) {
            flush(true);
            appendBlock(block);
            return;
        }

        // Reserve room for the previous chunk's tail in every piece after the first one.
        const pieceLimit = Math.max(180, limit - overlapLength - "Contexto previo: ".length - 2);
        const pieces = splitLongBlock(block, pieceLimit);
        pieces.forEach((piece, index) => {
            const overlap = pendingOverlap ? `Contexto previo: ${pendingOverlap}` : "";
            pendingOverlap = "";

            // Preserve overlap between pieces of a single long paragraph when it fits.
            currentContent = overlap && overlap.length + 2 + piece.length <= limit
                ? `${overlap}\n\n${piece}`
                : piece;

            if (index < pieces.length - 1) {
                flush(true);
            }
        });
    };

    for (const block of blocks) {
        const headingMatch = block.match(/^(#{1,6})\s+(.+)$/);

        if (headingMatch) {
            // A new heading starts a new semantic section. Its text will be prepended to all
            // following chunks, so retrieval never returns content without its subtitle/context.
            flush();
            pendingOverlap = "";

            const level = headingMatch[1].length;
            headings = headings.slice(0, level - 1);
            headings[level - 1] = { level, value: headingMatch[2].trim() };
            continue;
        }

        appendBlock(block);
    }

    flush();
    return chunks;
}

async function createEmbeddings(input) {
    const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input
    });

    return response.data[0].embedding;

}

async function main() {
    const files = await fs.readdir(KNOWLEDGE_DIR);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));

    console.log(`Found ${markdownFiles.length} markdown files in the knowledge directory.`);

    const { error : deleteError} = await supabase
    .from("document_chunks")
    .delete()
    .neq("id", 0);

    if (deleteError) throw deleteError;

    for (const file of markdownFiles) {
        const filePath = path.join(KNOWLEDGE_DIR, file);
        const content = await fs.readFile(filePath, "utf-8");

        const chunks = chunkText(content);

        console.log(`Processing file: ${file}, total chunks: ${chunks.length}`);

        for (const [index, chunk] of chunks.entries()) {
            const embedding = await createEmbeddings(chunk);

            const { error } = await supabase
            .from("document_chunks").insert({
                document_title: file.replace(".md", ""),
                source: file,
                content: chunk,
                embedding
            }) 

            if (error) throw error;

            console.log(`Inserted chunk ${index + 1}/${chunks.length} for file: ${file}`);
        }
    }

    console.log("Indexing completed successfully.");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    main().catch((error) => {
        console.error("Error during indexing:", error);
        process.exit(1);
    });
}
