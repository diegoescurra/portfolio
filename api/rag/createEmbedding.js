import OpenAI from "openai";

const EMBEDDING_MODEL = "text-embedding-3-small";
const MAX_QUERY_LENGTH = 500;

let openai;

function getOpenAIClient() {
  if (openai) return openai;

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not configured.");
  }

  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return openai;
}

export async function createEmbedding(input) {
  const text = String(input || "").trim();

  if (!text) {
    throw new Error("Cannot create an embedding from an empty query.");
  }

  // This must match the model used by scripts/indexKnowledge.js.
  // Different embedding models produce vectors that cannot be compared reliably.
  const response = await getOpenAIClient().embeddings.create({
    model: EMBEDDING_MODEL,
    input: text.slice(0, MAX_QUERY_LENGTH),
  });

  return response.data[0].embedding;
}
