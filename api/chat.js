const rateLimit = {};
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 7;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "https://diegoescurra.dev";

function getIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  return forwarded ? forwarded.split(",")[0].trim() : req.connection.remoteAddress;
}

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function setRateLimitHeaders(res, remaining) {
  res.setHeader("X-RateLimit-Limit", MAX_REQUESTS);
  res.setHeader("X-RateLimit-Remaining", Math.max(0, remaining));
}

function getRateLimitState(ip) {
  const now = Date.now();
  const current = rateLimit[ip];

  if (!current || now - current.start >= WINDOW_MS) {
    rateLimit[ip] = { count: 1, start: now };
    return { limited: false, remaining: MAX_REQUESTS - 1 };
  }

  current.count += 1;
  if (current.count > MAX_REQUESTS) {
    return { limited: true, remaining: 0 };
  }

  return { limited: false, remaining: MAX_REQUESTS - current.count };
}

function buildPrompt(message) {
  const context = `
PERFIL:
Desarrollador Full Stack enfocado en JavaScript (Node.js, React, Nuxt) con experiencia en backend, frontend y manejo de datos.

FORMACIÓN:
- Ingeniería Informática, AIEP Valparaíso (2018-2023)
- Formación complementaria: Todocode, Academia X, Midudev

STACK:
- Backend: Node.js (Express), Java (Spring)
- Frontend: React, Nuxt, Next, Tailwind
- Bases de datos: MySQL, PostgreSQL, MongoDB

EXPERIENCIA:
- Experiencia en IDA trabajando en desarrollo y mantenimiento de aplicaciones web en entornos productivos
- Participación en mejoras de rendimiento, SEO y experiencia de usuario en proyectos de clientes institucionales
- Experiencia freelance desarrollando sitios web, landing pages con CMS y una aplicación mobile

ENFOQUE:
- Backend y gestión de datos
- Rendimiento, SEO y experiencia de usuario
- Código limpio y análisis de requerimientos

INTERESES:
- Spring Security
- Kubernetes y AWS
- Desarrollo mobile

CONTACTO:
- Portafolio: https://diegoescurra.dev
- GitHub: https://github.com/diegoescurra
- LinkedIn: https://linkedin.com/in/diegoescurra
`;

  const safeMessage = String(message).slice(0, 500);

  return `
Eres un asistente del portafolio de Diego Escurra.

Reglas obligatorias:
- Responde en tercera persona (habla sobre Diego, no como si fueras él)
- No inventes información ni completes datos faltantes
- No exageres ni cambies el nivel de responsabilidad
- Usa solo la información del contexto
- Si algo no está en el contexto, dilo claramente

Estilo:
- Respuestas cortas (máximo 4-5 líneas)
- Tono claro, directo y natural (no robótico)
- No usar lenguaje comercial ni frases de venta
- No usar tablas ni listas largas
- No repetir todo el contexto

Guía:
- Tecnologías -> respuesta directa y breve
- Experiencia -> resumen general
- Contacto -> solo links y el formulario que está en el portafolio
- Preguntas fuera de contexto -> decir que no hay información

Contexto:
${context}

Pregunta:
${safeMessage}
`;
}

async function streamOpenRouterToClient(openRouterStream, res) {
  const reader = openRouterStream.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line.startsWith("data:")) continue;

      const data = line.slice(5).trim();
      if (!data || data === "[DONE]") continue;

      try {
        const parsed = JSON.parse(data);
        const token = parsed?.choices?.[0]?.delta?.content;
        if (token) {
          res.write(token);
        }
      } catch {
        // Ignora chunks no parseables.
      }
    }
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

  const ip = getIp(req);
  const { limited, remaining } = getRateLimitState(ip);
  setRateLimitHeaders(res, remaining);

  if (limited) {
    return res.status(429).json({ error: "Demasiadas solicitudes, intenta más tarde." });
  }

  const { message } = req.body || {};
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const openRouterResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages: [
          {
            role: "system",
            content:
              "Eres un asistente experto en el portafolio de Diego Escurra, un desarrollador Full Stack. Responde a las preguntas basándote únicamente en la información proporcionada en el contexto. Si no sabes la respuesta, dilo claramente.",
          },
          {
            role: "user",
            content: buildPrompt(message),
          },
        ],
        stream: true,
      }),
    });

    if (!openRouterResponse.ok || !openRouterResponse.body) {
      const errorText = await openRouterResponse.text();
      console.error("OpenRouter error:", errorText);
      return res.status(500).json({ error: "Error al generar la respuesta" });
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");

    await streamOpenRouterToClient(openRouterResponse.body, res);
    return res.end();
  } catch (error) {
    console.error("Error generating response:", error);

    if (!res.headersSent) {
      return res.status(500).json({ error: "Failed to generate response" });
    }

    return res.end();
  }
}
