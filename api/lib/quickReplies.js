const MAX_QUICK_REPLY_LENGTH = 100;

const QUICK_REPLIES = [
  {
    type: "greeting",
    pattern: /^(hola|holi|buenas|buenos dias|buen dia|buenas tardes|buenas noches|hey|hello)$/,
    content: "Hola. Puedes preguntarme por la experiencia, proyectos o stack de Diego.",
  },
  {
    type: "greeting",
    pattern: /^(hola|holi|buenas|hey)( (como estas|como te va|que tal|todo bien))$/,
    content: "Hola, todo bien. Puedo ayudarte con preguntas sobre la experiencia, proyectos o stack de Diego.",
  },
  {
    type: "wellbeing",
    pattern: /^(como estas|como te va|que tal|todo bien)$/,
    content: "Todo bien, gracias. Estoy disponible para responder preguntas sobre el portafolio de Diego.",
  },
  {
    type: "farewell",
    pattern: /^(chao|chau|adios|hasta luego|hasta pronto|nos vemos|bye)$/,
    content: "Hasta luego. Si necesitas algo más, puedes volver a escribir.",
  },
  {
    type: "thanks",
    pattern: /^(gracias|muchas gracias|te agradezco|vale gracias|ok gracias)$/,
    content: "De nada. ¿Hay algo más que quieras saber sobre Diego?",
  },
  {
    type: "help",
    pattern: /^(ayuda|que puedo preguntarte|que te puedo preguntar|en que me puedes ayudar|que sabes hacer)$/,
    content: "Puedes preguntarme por la experiencia profesional, proyectos, tecnologías, formación o formas de contacto de Diego.",
  },
  {
    type: "linkedin",
    pattern: /^(linkedin|linkedin de diego|cual es el linkedin de diego|dame el linkedin de diego)$/,
    content: "LinkedIn de Diego: https://linkedin.com/in/diego-escurra/",
  },
  {
    type: "github",
    pattern: /^(github|github de diego|cual es el github de diego|dame el github de diego)$/,
    content: "GitHub de Diego: https://github.com/diegoescurra",
  },
  {
    type: "contact",
    pattern: /^(contacto|contactar a diego|como contacto a diego|como puedo contactar a diego|datos de contacto de diego)$/,
    content: "Puedes contactar a Diego mediante el formulario del portafolio o por LinkedIn: https://linkedin.com/in/diego-escurra/",
  },
];

export function normalizeQuickReplyInput(message) {
  return String(message || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getQuickReply(message) {
  const normalized = normalizeQuickReplyInput(message);

  // Long messages usually contain a real question, even if they begin with a greeting.
  if (!normalized || normalized.length > MAX_QUICK_REPLY_LENGTH) return null;

  const match = QUICK_REPLIES.find(({ pattern }) => pattern.test(normalized));
  return match ? { type: match.type, content: match.content } : null;
}
