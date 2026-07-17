import ranutImage from "../assets/Ranut.png";
import portteckImage from "../assets/Portteck.png";
import tehagoelcvImage from "../assets/tehagoelcv.png";

export const workItems = [
  // {
  //   id: "altomonte",
  //   title: "Altomonte Bienes Raices",
  //   subtitle: "Corredora de propiedades independiente · sitio web a medida",
  //   description:
  //     "Diseño y desarrollo de sitio web para corredora de propiedades independiente, orientado a mostrar propiedades de forma clara y facilitar el contacto con potenciales clientes. Se trabajó en la estructura de contenidos, experiencia mobile y optimización de rendimiento para mejorar la navegación.",
  //   href: "https://altomontebienesraices.com",
  //   highlights: [
  //     "Desarrollo fullstack de plataforma web a medida",
  //     "Implementación de sistema de gestión y visualización de propiedades",
  //     "Definición de arquitectura de contenido orientada a navegación clara",
  //     "Optimización responsive con foco en experiencia mobile",
  //     "Optimización de rendimiento para mejorar tiempos de carga",
  //   ],
  //   stack: ["next", "node", "postgre"],
  //   mainImage: {
  //     src: altomonteImage,
  //     alt: "Altomonte home",
  //     href: "https://altomontebienesraices.com/",
  //   },

  // },
  {
    id: "ranut",
    title: "Ranut",
    subtitle: "Empresa de servicios y soporte para máquinas de café",
    description:
      "Diseño y desarrollo de una landing page para empresa de servicios de café, enfocada en comunicar de forma clara la oferta de reparación de máquinas, reposición de insumos y soporte técnico para oficinas y negocios en la Región de Valparaíso.",
    href: "https://www.ranut.cl",
    mainImage: {
      src: ranutImage,
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

    subtitle: "Empresa dedicada a proporcionar soluciones de control de acceso y seguridad",
    description:
      "Aplicación mobile que consta de manuales de instalación, uso y mantenimiento de productos de control de acceso y seguridad, desarrollada para facilitar el acceso a información técnica relevante para clientes y técnicos instaladores, con el objetivo de mejorar la experiencia postventa y soporte técnico.",
    href: "https://www.portteck.cl",
    mainImage: {
      src: portteckImage,
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
  {
    id: "tehagoelcv",
    title: "TehagoelCV",
    subtitle: "Empresa dedicada a la redacción de CV, optimización de perfiles de LinkedIn y preparación para entrevistas",
    description:
      "Diseño y desarrollo de una landing page para un servicio de empleabilidad en Chile, enfocada en presentar de forma clara la propuesta de valor, los servicios ofrecidos y el proceso de trabajo. El sitio busca transmitir confianza, ordenar la información comercial y facilitar el contacto de personas que necesitan mejorar su CV, LinkedIn o preparación para entrevistas.",
    href: "https://www.tehagoelcv.com",
    mainImage: {
      src: tehagoelcvImage,
      alt: "Vista previa de la landing page de TehagoelCV",
      href: "https://www.tehagoelcv.com",
    },
    highlights: [
      "Desarrollo completo de landing page desde cero utilizando Astro",
      "Diseño de una estructura clara para presentar servicios de CV, LinkedIn y preparación laboral",
      "Creación de secciones orientadas a explicar la propuesta de valor, el proceso y los beneficios del servicio",
      "Implementación responsive para una correcta visualización en dispositivos móviles",
      "Integración de llamados a la acción para facilitar el contacto con potenciales clientes",
    ],
    stack: ["astro", "tailwind"],
  }
];
