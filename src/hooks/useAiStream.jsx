import { useCallback, useRef, useState } from "react";

const CHAT_ENDPOINT = 'https://portfolio-phi-lyart-70.vercel.app/api/chat';

const createMessage = (id, role, content, isStreaming = false) => ({
  id,
  role,
  content,
  isStreaming,
});

export const useAiStream = () => {
  const [messages, setMessages] = useState([
    createMessage(
      "assistant-welcome",
      "assistant",
      "Hola, soy PortaBot, asistente del portafolio de Diego. ¿En qué puedo ayudarte?"
    ),
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const idCounterRef = useRef(0);

  const nextId = useCallback(() => {
    idCounterRef.current += 1;
    return `msg-${idCounterRef.current}`;
  }, []);

  const updateAssistantMessage = useCallback((assistantId, content, isStreaming = true) => {
    setMessages((prev) =>
      prev.map((item) =>
        item.id === assistantId ? { ...item, content, isStreaming } : item
      )
    );
  }, []);

  const streamAssistantResponse = useCallback(
    async (response, assistantId) => {
      if (!response.body) {
        throw new Error("No se pudo leer el stream de respuesta.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = "";

      let done = false;
      while (!done) {
        const chunkResult = await reader.read();
        done = chunkResult.done;
        if (done) break;

        const chunk = decoder.decode(chunkResult.value, { stream: true });
        fullText += chunk;
        updateAssistantMessage(assistantId, fullText, true);
      }

      const finalText = fullText.trim() || "No tengo respuesta por ahora.";
      updateAssistantMessage(assistantId, finalText, false);
    },
    [updateAssistantMessage]
  );

  const sendMessage = useCallback(
    async (rawMessage) => {
      setError("");
      const userMessage = String(rawMessage || "").trim();
      if (!userMessage || loading) return;

      const userId = nextId();
      const assistantId = nextId();

      setMessages((prev) => [
        ...prev,
        createMessage(userId, "user", userMessage),
        createMessage(assistantId, "assistant", "", true),
      ]);

      setLoading(true);

      try {
        const response = await fetch(CHAT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        });

        if (!response.ok) {
          throw new Error("Error al enviar el mensaje.");
        }

        await streamAssistantResponse(response, assistantId);
      } catch {
        setError("Ocurrió un error al enviar tu mensaje. Por favor, intenta de nuevo.");
        updateAssistantMessage(
          assistantId,
          "Lo siento, ocurrió un error al responder. Por favor, intenta nuevamente.",
          false
        );
      } finally {
        setLoading(false);
      }
    },
    [loading, nextId, streamAssistantResponse, updateAssistantMessage]
  );

  return {
    messages,
    loading,
    error,
    sendMessage,
  };
};
