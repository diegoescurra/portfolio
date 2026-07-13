import { getOpenAIClient } from "../lib/openai.js";

const EMBEDDING_MODEL = "text-embedding-3-small";
const MAX_QUERY_LENGTH = 500;

export async function createEmbedding(input) {
  const text = String(input || "").trim();

  if (!text) {
    throw new Error("Cannot create an embedding from an empty query.");
  }

  // This must match the model used by scripts/indexKnowledge.js.
  // Different embedding models produce vectors that cannot be compared reliably.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await getOpenAIClient().embeddings.create(
      {
        model: EMBEDDING_MODEL,
        input: text.slice(0, MAX_QUERY_LENGTH),
      },
      { signal: controller.signal }
    );

    return response.data[0].embedding;
  } finally {
    clearTimeout(timeout);
  }
}
