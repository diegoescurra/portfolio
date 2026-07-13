-- Run this migration in Supabase before deploying the RAG search.
-- text-embedding-3-small produces 1536-dimensional vectors by default.

create or replace function public.match_document_chunks(
  query_embedding vector(1536),
  match_threshold float default 0.35,
  match_count int default 5
)
returns table (
  id bigint,
  document_title text,
  source text,
  content text,
  similarity float
)
language sql
stable
set search_path = public
as $$
  select
    document_chunks.id,
    document_chunks.document_title,
    document_chunks.source,
    document_chunks.content,
    1 - (document_chunks.embedding <=> query_embedding) as similarity
  from public.document_chunks
  where 1 - (document_chunks.embedding <=> query_embedding) >= match_threshold
  order by document_chunks.embedding <=> query_embedding
  limit match_count;
$$;
