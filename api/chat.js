
const rateLimit = {};
const WINDOWS_MS = 60 * 1000; // 1 minuto
const MAX_REQUESTS = 7;

function getIp(req) {
    const ip = req.headers['x-forwarded-for']
    return ip ? ip.split(',')[0].trim() : req.connection.remoteAddress;
}


export default async function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "https://diegoescurra.dev");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const ip = getIp(req);
    if (!rateLimit[ip]) {
        rateLimit[ip] = {
            count: 1,
            start: Date.now()
        };
    } else {
        const now = Date.now();
        const diff = now - rateLimit[ip].start;

        if (diff < WINDOWS_MS) {
            rateLimit[ip].count++;

            if (rateLimit[ip].count > MAX_REQUESTS) {
                res.setHeader("X-RateLimit-Limit", MAX_REQUESTS);
                res.setHeader("X-RateLimit-Remaining", 0);
                return res.status(429).json({
                    error: "Demasiadas solicitudes, intenta más tarde."
                });
            }
        } else {
            rateLimit[ip] = { count: 1, start: now };
        }
    }



    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const remaining = Math.max(0, MAX_REQUESTS - rateLimit[ip].count);


    try {


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
- Participación en mejoras de rendimiento, SEO y experiencia de usuario en sitios institucionales
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

        const safeMessage = message.slice(0, 500); // Limitar el mensaje a 500 caracteres para evitar problemas de longitud


        const prompt = `
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
- Tecnologías → respuesta directa y breve
- Experiencia → resumen general
- Contacto → solo links y el formulario que está en el portafolio
- Preguntas fuera de contexto → decir que no hay información

Contexto:
${context}

Pregunta:
${safeMessage}
`;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openrouter/free",
                messages: [
                    {
                        role: "system",
                        content: "Eres un asistente experto en el portafolio de Diego Escurra, un desarrollador Full Stack. Responde a las preguntas basándote únicamente en la información proporcionada en el contexto. Si no sabes la respuesta, dilo claramente."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
            })
        });



        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response from OpenRouter;', errorText);
            res.setHeader("X-RateLimit-Limit", MAX_REQUESTS);
            res.setHeader("X-RateLimit-Remaining", remaining);
            return res.status(500).json({ error: 'Error al generar la respuesta' });
        }
        const data = await response.json();

        res.setHeader("X-RateLimit-Limit", MAX_REQUESTS);
        res.setHeader("X-RateLimit-Remaining", remaining);
        return res.status(200).json({ response: data.choices?.[0]?.message?.content || "No response generated" });

    }
    catch (error) {
        console.error('Error generating response:', error);
        res.setHeader("X-RateLimit-Limit", MAX_REQUESTS);
        res.setHeader("X-RateLimit-Remaining", remaining);
        res.status(500).json({ error: 'Failed to generate response' });
    }
}