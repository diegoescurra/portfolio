import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, SendHorizontal, Sparkles, UserRound, X } from "lucide-react";

const CHAT_ENDPOINT = "/api/chat";

function createMessage(id, role, content) {
  return { id, role, content };
}

function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[90%] sm:max-w-[78%] rounded-2xl px-4 py-3 border ${
          isUser
            ? "bg-[var(--accent)] text-white border-[var(--accent)] rounded-br-md"
            : "bg-white text-[var(--ink-strong)] border-[var(--line)] rounded-bl-md"
        }`}
      >
        <div className="flex items-center gap-2 mb-1.5 text-xs">
          {isUser ? <UserRound size={14} /> : <Bot size={14} />}
          <span>{isUser ? "Tú" : "Asistente"}</span>
        </div>
        <p
          className={`text-sm sm:text-base leading-relaxed whitespace-pre-wrap ${
            isUser ? "text-white" : "text-[var(--ink-strong)]"
          }`}
        >
          {message.content}
        </p>
      </div>
    </div>
  );
}

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    createMessage(
      "assistant-welcome",
      "assistant",
      "Hola, soy PortaBot, asistente del portafolio de Diego. ¿En qué puedo ayudarte?"
    ),
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const messageEndRef = useRef(null);
  const idCounterRef = useRef(0);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const nextId = () => {
    idCounterRef.current += 1;
    return `msg-${idCounterRef.current}`;
  };

  const updateAssistantMessage = (assistantId, content) => {
    setMessages((prev) =>
      prev.map((item) => (item.id === assistantId ? { ...item, content } : item))
    );
  };

  const streamAssistantResponse = async (response, assistantId) => {
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
      updateAssistantMessage(assistantId, fullText);
    }

    const finalText = fullText.trim() || "No tengo respuesta por ahora.";
    updateAssistantMessage(assistantId, finalText);
  };

  const sendMessage = async () => {
    setError("");
    const userMessage = message.trim();
    if (!userMessage || loading) return;

    const userId = nextId();
    const assistantId = nextId();

    setMessages((prev) => [
      ...prev,
      createMessage(userId, "user", userMessage),
      createMessage(assistantId, "assistant", ""),
    ]);

    setMessage("");
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
    } catch (requestError) {
      setError("Ocurrió un error al enviar tu mensaje. Por favor, intenta de nuevo.");
      updateAssistantMessage(
        assistantId,
        "Lo siento, ocurrió un error al responder. Por favor, intenta nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!loading && message.trim()) sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[70]">
      {isOpen && (
        <div className="fixed bottom-20 right-4 left-4 sm:left-auto sm:right-6 sm:w-[420px] h-[70vh] sm:h-[560px] rounded-[24px] border border-[var(--line)] bg-[var(--bg-surface)] shadow-[0_20px_36px_rgba(30,42,42,0.18)] overflow-hidden flex flex-col">
          <div className="border-b border-[var(--line)] px-4 sm:px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                <Bot size={20} />
              </span>
              <div>
                <p className="text-[var(--ink-strong)] font-medium">PortaBot</p>
                <p className="text-xs text-[var(--ink-soft)] inline-flex items-center gap-1">
                  <Sparkles size={12} /> Asistente de portafolio
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-soft)] hover:text-[var(--ink-strong)] hover:border-[var(--accent)] transition"
              aria-label="Cerrar chat"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-5 bg-[linear-gradient(180deg,#fffef9_0%,#fbf8ef_100%)]">
            <div className="space-y-4">
              {messages.map((item) => (
                <MessageBubble key={item.id} message={item} />
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md px-4 py-3 border border-[var(--line)] bg-white text-[var(--ink-soft)]">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
                      <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse [animation-delay:120ms]"></span>
                      <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse [animation-delay:240ms]"></span>
                      <span className="ml-2">Escribiendo...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messageEndRef} />
            </div>
          </div>

          <div className="border-t border-[var(--line)] px-3 sm:px-4 py-3 bg-[var(--bg-surface)]">
            <div className="flex items-end gap-2 sm:gap-3">
              <textarea
                value={message}
                onKeyDown={handleKeyDown}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Escribe tu pregunta..."
                className="min-h-[48px] max-h-32 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink-strong)] placeholder:text-[var(--ink-soft)] focus:outline-none focus:ring-2 focus:ring-emerald-500/30 resize-none"
              />

              <button
                onClick={sendMessage}
                disabled={loading || !message.trim()}
                className="h-12 shrink-0 rounded-xl bg-[var(--accent)] px-4 sm:px-5 text-[#effbf7] font-medium transition hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar mensaje"
              >
                <span className="hidden sm:inline-flex items-center gap-2">
                  Enviar <SendHorizontal size={16} />
                </span>
                <span className="sm:hidden inline-flex items-center">
                  <SendHorizontal size={16} />
                </span>
              </button>
            </div>

            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[var(--accent)] text-[#effbf7] shadow-[0_14px_26px_rgba(31,122,109,0.45)] inline-flex items-center justify-center hover:brightness-95 transition"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};
