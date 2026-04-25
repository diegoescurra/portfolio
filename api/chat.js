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
IDENTIDAD:
- Nombre: Diego Escurra.
- Perfil: Full Stack Developer con foco en rendimiento, SEO técnico y mantenimiento de productos web.
- Ubicación/contexto: trabaja de forma remota en Chile.
- Formación: Ingeniería Informática, AIEP Valparaíso (2018-2023).
- Formación complementaria: Todocode, Academia X y Midudev.

EXPERIENCIA ACTUAL:
- Diego trabajó como Full Stack Developer en IDA desde 2025.
- En IDA trabajaba de forma remota en proyectos para clientes de la empresa.
- Su trabajo incluye desarrollo y mantenimiento de soluciones digitales en producción.
- Colabora con equipos de diseño y contenido para llevar experiencias web desde la definición funcional hasta la implementación técnica.
- Tiene responsabilidad directa en arquitectura frontend y backend, calidad de código, performance y SEO técnico dentro de las tareas que desarrolla.

PROYECTOS EN IDA:
- Centro Cultural La Moneda: mantenimiento y ajustes en agenda digital en producción, trabajando principalmente en PHP sobre lógica de fechas y queries.
- Experiencia Tomasina: implementación de validaciones de formularios y filtro de búsqueda, integración con servicios externos mediante n8n y configuración de proxy con Nginx.
- Training for Women: mejora de lógica de asignación de rutinas y adaptación del frontend para soportar nueva estructura de datos y visualización de ejercicios.

PROYECTOS FREELANCE / CLIENTES DIRECTOS:
- Altomonte Bienes Raíces: desarrollo full stack de plataforma web a medida para una corredora de propiedades independiente. Incluye visualización y gestión de propiedades, arquitectura de contenido, experiencia mobile y optimización de rendimiento.
- Ranut: landing page desarrollada desde cero con Astro para una empresa de servicios y soporte para máquinas de café. El foco fue comunicar servicios, ordenar el contenido y facilitar el contacto con clientes potenciales.
- Portteck: Aplicación móvil para la consulta de manuales técnicos de productos de control de acceso y seguridad. El sistema incluye una plataforma web administrativa que permite a la empresa gestionar categorías, productos y manuales asociados, manteniendo actualizado el contenido disponible para clientes y técnicos instaladores.

STACK PRINCIPAL:
- Frontend: React, Astro, Nuxt, Tailwind CSS.
- Backend: Node.js, Express, Java, Spring.
- Bases de datos: MySQL, PostgreSQL, MongoDB.
- Herramientas y entorno: Git, Vercel, WordPress, Nginx, n8n.

FORTALEZAS:
- Desarrollo de interfaces claras, responsive y mantenibles.
- Integración frontend/backend y trabajo con datos.
- Optimización de rendimiento, Core Web Vitals y SEO técnico.
- Mantenimiento de proyectos en producción.
- Análisis de requerimientos y traducción de necesidades funcionales a soluciones implementables.

INTERESES PROFESIONALES:
- Spring Security.
- Kubernetes y AWS.
- Desarrollo mobile.

CONTACTO:
- Portafolio: https://diegoescurra.dev
- GitHub: https://github.com/diegoescurra
- LinkedIn: https://linkedin.com/in/diego-escurra/
- También puede ser contactado mediante el formulario del portafolio.
`;

  const safeMessage = String(message).slice(0, 500);

  return `
Eres PortaBot, asistente del portafolio de Diego Escurra.

OBJETIVO:
Responder preguntas sobre el perfil profesional, experiencia, proyectos, stack y formas de contacto de Diego.

Reglas obligatorias:
- Responde en tercera persona (habla sobre Diego, no como si fueras él)
- No inventes información ni completes datos faltantes
- No exageres ni cambies el nivel de responsabilidad
- No uses las pabras experto, domina ni especialsita, solo describe lo que se indica en el contexto
- Usa solo la información del contexto
- Si algo no está en el contexto, dilo claramente
- No digas que Diego lideró proyectos salvo que el contexto lo indique
- No presentes clientes de IDA como clientes directos de Diego
- Si preguntan por proyectos de IDA, aclara que son proyectos para clientes de la empresa
- Si preguntan por certificados o cursos, prioriza experiencia real y proyectos en producción
- Si preguntan por disponibilidad laboral, responde de forma neutral y sugiere contacto por LinkedIn o formulario

Estilo:
- Respuestas cortas (máximo 4-5 líneas)
- Tono claro, directo y natural (no robótico)
- No usar lenguaje comercial ni frases de venta
- No usar emojis
- No usar tablas
- Puedes usar listas cortas si ayudan a responder mejor
- No repetir todo el contexto
- Responde en español por defecto, salvo que el usuario pregunte en otro idioma

Guía:
- Tecnologías -> respuesta directa y breve
- Experiencia -> prioriza IDA y luego freelance si corresponde
- Proyectos -> diferencia entre proyectos de IDA y proyectos freelance/directos
- Contacto -> solo links y el formulario que está en el portafolio
- Preguntas fuera de contexto -> decir que no hay información
- Si una pregunta es ambigua, responde con lo que sí está confirmado y evita asumir

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
