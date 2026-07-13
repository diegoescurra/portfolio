import { randomUUID } from "node:crypto";
import { getSupabaseServerClient } from "./supabase.js";

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function normalizeConversationId(value) {
  // The browser normally sends a UUID from localStorage. Generate one server-side as a safe fallback.
  return typeof value === "string" && UUID_PATTERN.test(value) ? value : randomUUID();
}

export async function saveChatMessages({ conversationId, userMessage, assistantMessage }) {
  const normalizedConversationId = normalizeConversationId(conversationId);
  const messages = [
    {
      conversation_id: normalizedConversationId,
      role: "user",
      content: String(userMessage).trim(),
    },
    {
      conversation_id: normalizedConversationId,
      role: "assistant",
      content: String(assistantMessage).trim(),
    },
  ].filter((message) => message.content);

  if (!messages.length) return normalizedConversationId;

  const { error } = await getSupabaseServerClient().from("chat_messages").insert(messages);

  if (error) {
    throw new Error(`Could not save chat messages: ${error.message}`);
  }

  return normalizedConversationId;
}
