-- Stores each conversation as ordered messages grouped by an anonymous browser UUID.
-- No IP address, email or authenticated user identifier is stored in this table.

create extension if not exists pgcrypto;

create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null,
  role text not null check (role in ('user', 'assistant')),
  content text not null check (char_length(content) between 1 and 10000),
  created_at timestamptz not null default timezone('utc', now())
);

-- Used when reviewing a conversation in chronological order.
create index if not exists chat_messages_conversation_created_at_idx
  on public.chat_messages (conversation_id, created_at);

alter table public.chat_messages enable row level security;

-- No RLS policies are created intentionally. Browsers cannot read or write chat history.
-- The API uses SUPABASE_SERVICE_ROLE_KEY, which bypasses RLS server-side only.
