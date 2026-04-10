import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {

        const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        const model = genAi.getGenerativeModel({
            model: "models/gemini-2.0-flash",
        })

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
`;

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
${message}
`;
        const result = await model.generateContent(
           prompt
        )

        const response = await result.response;
        const text = response.text();

        res.status(200).json({ response: text });

    }
    catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
}