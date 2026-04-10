
const rateLimit = {};
const WINDOWS_MS = 60 * 1000; // 1 minuto
const MAX_REQUESTS = 7;

function getIp(req) {
    const ip = req.headers['x-forwarded-for'] 
    return ip ? ip.split(',')[0].trim() : req.connection.remoteAddress;
}


export default async function handler(req, res) {
    
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
Diego Escurra es Ingeniero Informático y desarrollador Full Stack con experiencia en proyectos reales para empresas e instituciones.

Su enfoque principal es el desarrollo con JavaScript, utilizando Node.js para backend y frameworks como React, Nuxt y Next en frontend. También cuenta con experiencia en Java utilizando Spring.

En backend, desarrolla APIs y lógica de negocio utilizando Node.js con Express y Java con Spring. En frontend, construye interfaces modernas utilizando React, Nuxt, Next y Tailwind.

Tiene experiencia trabajando con bases de datos relacionales como MySQL y PostgreSQL, así como bases de datos NoSQL como MongoDB.

Ha trabajado en proyectos para instituciones como Santo Tomás, donde participó en la mejora de rendimiento (Core Web Vitals), SEO y experiencia de usuario en sitios institucionales.

En su experiencia en IDA, trabajó inicialmente apoyando en proyectos como Experiencia Tomasina, luego tuvo un rol más activo en el proyecto Training for Women, y participó en mantenimiento del sitio del Centro Cultural La Moneda. También formó parte del desarrollo del nuevo sitio de IDA junto al equipo de diseño.

Como desarrollador freelance, ha desarrollado soluciones completas como sitios web, landing pages con CMS y una aplicación mobile para clientes como Altomonte Bienes Raíces, Ranut y Portteck.

Se enfoca en resolver problemas de backend y en la correcta gestión de datos para su representación en el frontend, asegurando coherencia entre la lógica y la interfaz.

Tiene especial interés en mejorar el rendimiento de aplicaciones, SEO y la experiencia de usuario (UI/UX).

Se caracteriza por su enfoque en análisis de requerimientos, código limpio y optimización de rendimiento.

Trabaja con despliegues en plataformas como Netlify y Vercel, utilizando arquitecturas modernas orientadas a servicios y serverless.

Actualmente está aprendiendo sobre Spring Security y tiene interés en profundizar en Kubernetes, AWS y desarrollo de aplicaciones móviles.

Otras habilidades incluyen el uso de herramientas de control de versiones como Git, metodologías ágiles y colaboración en equipo.
`;

        const safeMessage = message.slice(0, 500); // Limitar el mensaje a 500 caracteres para evitar problemas de longitud


        const prompt = `
Responde como un asistente del portafolio de Diego Escurra.

Tono:
- Casual pero profesional
- Claro y directo
- Cercano (no robótico)

Reglas:
- No inventes información
- No exageres logros
- Si algo no está en el contexto, dilo
- Prioriza ejemplos reales
- Mantén respuestas concisas pero útiles

Objetivo:
- Explicar la experiencia de Diego de forma clara
- Destacar proyectos reales y habilidades técnicas
- Dar confianza como desarrollador

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
                model: "mistralai/mistral-7b-instruct:free",
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