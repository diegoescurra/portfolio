import { buildReferenceContext, SYSTEM_PROMPT } from "./lib/chatPrompt.js";
import { saveChatMessages } from "./lib/chatHistory.js";
import { getOpenAIClient } from "./lib/openai.js";
import { getQuickReply } from "./lib/quickReplies.js";
import { applyRateLimitHeaders, checkChatRateLimit } from "./lib/rateLimit.js";
import { createEmbedding } from "./rag/createEmbedding.js";
import { searchChunks } from "./rag/searchChunk.js";

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "https://diegoescurra.dev";
const CHAT_MODEL = process.env.OPENAI_CHAT_MODEL || "gpt-4.1-mini";
const CHAT_TIMEOUT_MS = 25_000;
const MAX_COMPLETION_TOKENS = 250;
const MAX_RESPONSE_CHARACTERS = 4_000;

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader(
    "Access-Control-Expose-Headers",
    "RateLimit-Limit, RateLimit-Remaining, RateLimit-Reset, Retry-After, X-RateLimit-Daily-Limit, X-RateLimit-Daily-Remaining, X-Response-Source"
  );
}

function formatRetrievedContext(chunks) {
  if (!chunks.length) {
    return "No se encontró información relevante para esta pregunta.";
  }

  return chunks
    .map(
      (chunk, index) =>
        `[Fragmento ${index + 1}: ${chunk.source || "sin fuente"}]\n${chunk.content}`
    )
    .join("\n\n---\n\n");
}

async function streamOpenAIResponse(stream, res) {
  let responseText = "";

  for await (const chunk of stream) {
    const token = chunk.choices?.[0]?.delta?.content;
    if (!token) continue;

    const availableCharacters = MAX_RESPONSE_CHARACTERS - responseText.length;
    if (availableCharacters <= 0) break;

    const safeToken = token.slice(0, availableCharacters);
    responseText += safeToken;
    res.write(safeToken);

    if (safeToken.length < token.length) break;
  }

  return responseText.trim();
}

async function generateAssistantResponse({ userMessage, retrievedContext, res }) {
  const controller = new AbortController();
  let timedOut = false;
  let disconnected = false;

  const timeout = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, CHAT_TIMEOUT_MS);

  const abortOnDisconnect = () => {
    disconnected = true;
    controller.abort();
  };

  res.once("close", abortOnDisconnect);

  try {
    const stream = await getOpenAIClient().chat.completions.create(
      {
        model: CHAT_MODEL,
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "system",
            content: buildReferenceContext(retrievedContext),
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
        stream: true,
        temperature: 0.2,
        max_completion_tokens: MAX_COMPLETION_TOKENS,
      },
      { signal: controller.signal }
    );

    return await streamOpenAIResponse(stream, res);
  } catch (error) {
    if (timedOut) {
      const timeoutError = new Error("OpenAI response timed out.");
      timeoutError.code = "AI_TIMEOUT";
      throw timeoutError;
    }

    if (disconnected) {
      const disconnectError = new Error("The client disconnected.");
      disconnectError.code = "CLIENT_DISCONNECTED";
      throw disconnectError;
    }

    throw error;
  } finally {
    clearTimeout(timeout);
    res.removeListener("close", abortOnDisconnect);
  }
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const rateLimit = await checkChatRateLimit(req);
    applyRateLimitHeaders(res, rateLimit);

    if (!rateLimit.success) {
      return res
        .status(429)
        .json({ error: "Has alcanzado el límite de mensajes. Intenta nuevamente más tarde." });
    }
  } catch (error) {
    // Fail closed so a Redis outage cannot produce unprotected paid OpenAI calls.
    console.error("Rate limit unavailable:", error);
    return res
      .status(503)
      .json({ error: "El chat no está disponible temporalmente. Intenta nuevamente más tarde." });
  }

  const { message, conversationId } = req.body || {};
  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Message must be a non-empty string" });
  }

  const userMessage = message.trim();
  if (userMessage.length > 500) {
    return res.status(400).json({ error: "Message cannot exceed 500 characters" });
  }

  const quickReply = getQuickReply(userMessage);
  if (quickReply) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Response-Source", `quick-reply:${quickReply.type}`);
    return res.status(200).end(quickReply.content);
  }

  try {
    const queryEmbedding = await createEmbedding(userMessage);
    const matchingChunks = await searchChunks(queryEmbedding);
    const retrievedContext = formatRetrievedContext(matchingChunks);

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Response-Source", "rag-openai");

    const assistantMessage = await generateAssistantResponse({
      userMessage,
      retrievedContext,
      res,
    });

    try {
      await saveChatMessages({ conversationId, userMessage, assistantMessage });
    } catch (storageError) {
      // History is secondary and must not turn a successful answer into a client error.
      console.error("Could not save chat history:", storageError);
    }

    return res.end();
  } catch (error) {
    if (error.code === "CLIENT_DISCONNECTED" || res.destroyed) {
      return;
    }

    console.error("Error generating response:", error);

    if (!res.headersSent) {
      const status = error.code === "AI_TIMEOUT" ? 504 : 500;
      const message =
        error.code === "AI_TIMEOUT"
          ? "La respuesta tardó demasiado. Intenta nuevamente."
          : "No se pudo generar la respuesta.";
      return res.status(status).json({ error: message });
    }

    return res.end();
  }
}
