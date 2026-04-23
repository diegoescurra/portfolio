export const workItems = [
  {
    id: "altomonte",
    title: "Altomonte Bienes Raices",
    subtitle: "Corredora de propiedades independiente · sitio web a medida",
    description:
      "Diseño y desarrollo de sitio web para corredora de propiedades independiente, orientado a mostrar propiedades de forma clara y facilitar el contacto con potenciales clientes. Se trabajó en la estructura de contenidos, experiencia mobile y optimización de rendimiento para mejorar la navegación.",
    href: "https://altomontebienesraices.com",
    highlights: [
      "Desarrollo fullstack de plataforma web a medida",
      "Implementación de sistema de gestión y visualización de propiedades",
      "Definición de arquitectura de contenido orientada a navegación clara",
      "Optimización responsive con foco en experiencia mobile",
      "Optimización de rendimiento para mejorar tiempos de carga",
    ],
    stack: ["next", "node", "postgre"],
    mainImage: {
      src: "/altomonte_home.png",
      alt: "Altomonte home",
      href: "https://altomontebienesraices.com/",
    },
   
  },
  {
    id: "ranut",
    title: "Ranut",
    subtitle: "Empresa de servicios y soporte para máquinas de café",
    description:
      "Diseño y desarrollo de una landing page para empresa de servicios de café, enfocada en comunicar de forma clara la oferta de reparación de máquinas, reposición de insumos y soporte técnico para oficinas y negocios en la Región de Valparaíso.",
    href: "https://www.ranut.cl",
    mainImage: {
      src: "/Ranut.png",
      alt: "Ranut preview",
      href: "https://www.ranut.cl",
    },
    highlights: [
      "Desarrollo completo de landing page desde cero utilizando Astro",
      "Estructuración del contenido para explicar claramente los servicios ofrecidos",
      "Diseño responsive optimizado para dispositivos móviles",
      "Implementación de secciones orientadas a facilitar el contacto con clientes potenciales",
    ],
    stack: ["astro", "sanity"],
  },
  {
    id: "portteck",
    title: "Portteck",
    
    subtitle: "Empresa dedicada a proporsucionar soluciones de control de acceso y seguridad",
    description:
      "Aplicación mobile que consta de manuales de instalación, uso y mantenimiento de productos de control de acceso y seguridad, desarrollada para facilitar el acceso a información técnica relevante para clientes y técnicos instaladores, con el objetivo de mejorar la experiencia postventa y soporte técnico.",
    mainImage: {
      src: "/Portteck.png",
      alt: "Portteck preview",
      href: "https://www.portteck.cl",
    },
    highlights: [
      "Desarrollo de aplicación mobile para consulta de manuales técnicos utilizando React Native",
      "Implementación de categorización de productos para mejorar la búsqueda y usabilidad",
      "Consumo de datos desde backend para mantener contenido actualizado",
      "Mejora de la experiencia postventa mediante acceso centralizado a documentación técnica",
    ],
    stack: ["reactNative", "next", "supabase"],
  },
];
