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
    subtitle: "Servicios y soporte para máquinas de café",
    description:
      "Landing page creada para presentar los servicios de reparación, reposición de insumos y soporte técnico de Ranut, facilitando que oficinas y negocios conozcan su oferta y soliciten una cotización.",
    href: "https://www.ranut.cl",
    mainImage: {
      src: ranutImage,
      alt: "Vista previa del sitio de Ranut",
      href: "https://www.ranut.cl",
    },
    highlights: [
      "Landing page creada con Astro",
      "Contenido organizado por servicio",
      "Diseño adaptable para celulares y escritorio",
      "Gestión de contenido con Sanity",
    ],
    stack: ["astro", "sanity"],
  },
  {
    id: "portteck",
    title: "Portteck",

    subtitle: "Aplicación móvil de documentación técnica",
    description:
      "Aplicación móvil para consultar manuales de instalación, uso y mantenimiento de productos de control de acceso. Centraliza información técnica para clientes y técnicos instaladores.",
    href: "https://www.portteck.cl",
    mainImage: {
      src: portteckImage,
      alt: "Vista previa de la aplicación de Portteck",
      href: "https://www.portteck.cl",
    },
    highlights: [
      "Aplicación creada con React Native",
      "Manuales organizados por categorías de producto",
      "Integración con backend para mantener el contenido actualizado",
      "Administración de datos con Next.js y Supabase",
    ],
    stack: ["reactNative", "next", "supabase"],
  },
  {
    id: "tehagoelcv",
    title: "TehagoelCV",
    subtitle: "Sitio web para servicios de empleabilidad",
    description:
      "Landing page creada para presentar los servicios, explicar el proceso de trabajo y facilitar el contacto de personas interesadas en mejorar su CV, LinkedIn o preparación para entrevistas.",
    href: "https://www.tehagoelcv.com",
    mainImage: {
      src: tehagoelcvImage,
      alt: "Vista previa de la landing page de TehagoelCV",
      href: "https://www.tehagoelcv.com",
    },
    highlights: [
      "Landing page creada con Astro",
      "Contenido organizado por servicios y etapas del proceso",
      "Diseño adaptable para celulares y escritorio",
      "Llamados a la acción para facilitar el contacto",
    ],
    stack: ["astro", "tailwind"],
  }
];
