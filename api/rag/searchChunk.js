import { getSupabaseServerClient } from "../lib/supabase.js";

const DEFAULT_MATCH_COUNT = 5;
const DEFAULT_MATCH_THRESHOLD = 0.35;

export async function searchChunks(
  embedding,
  { matchCount = DEFAULT_MATCH_COUNT, matchThreshold = DEFAULT_MATCH_THRESHOLD } = {}
) {
  if (!Array.isArray(embedding) || embedding.length === 0) {
    throw new Error("A valid query embedding is required.");
  }

  // `match_document_chunks` is a Postgres RPC that performs the vector similarity search.
  // It must receive the same 1536-dimension vectors stored by the indexing script.
  const { data, error } = await getSupabaseServerClient().rpc("match_document_chunks", {
    query_embedding: embedding,
    match_count: matchCount,
    match_threshold: matchThreshold,
  });

  if (error) {
    throw new Error(`Supabase vector search failed: ${error.message}`);
  }

  return data || [];
}
