import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";

const selectedWork = [
  {
    name: "Centro Cultural La Moneda",
    description:
     "Resolución de incidencias en el sitio y su plataforma de venta de entradas, trabajando sobre código e integraciones en producción para mantener la estabilidad del sistema después de cambios y despliegues.",
    href: "https://cclm.cl/"
  },
  {
    name: "Experiencia Tomasina",
    description:
      "Desarrollo de funcionalidades frontend y backend, integración de servicios y migración de contenido desde WordPress hacia una estructura basada en Markdown. También implementé Nginx como reverse proxy para centralizar el acceso a servicios externos.",
    href: "https://experienciatomasina.ust.cl/"
  },
  {
    name: "Training for Women",
    description:
      "Desarrollo y reorganización de la lógica de asignación de rutinas, macrociclos, ejercicios y planes de entrenamiento. También adapté el frontend y resolví incidencias antes de la entrega del proyecto.",
    href: "https://t4w.cl/"
  },
];

export const ExperienceShowcase = () => {
  return (
    <section className="py-20 relative z-0" id="experiencia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-14">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">Experiencia profesional</p>
          <h2 className="text-4xl md:text-5xl text-[var(--ink-strong)] mb-4">Desarrollo Full Stack en IDA</h2>
          <p className="max-w-3xl leading-relaxed">
            Trabajé en el desarrollo, mantenimiento y optimización de soluciones web para clientes e instituciones, implementando funcionalidades, integrando servicios y resolviendo incidencias en sistemas en producción.
          </p>
        </header>

        <article className="border-t border-[var(--line)] pt-10 pb-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-2xl text-[var(--ink-strong)] mb-2">Full Stack Developer</p>
              <p className="text-sm text-[var(--ink-soft)]">Agosto 2025 – marzo 2026</p>
            </div>

            <div className="lg:col-span-8">
              <p className="leading-relaxed mb-6">
                Colaboré con equipos de diseño, producto y desarrollo para transformar requerimientos en soluciones técnicas mantenibles y adaptadas a las necesidades de cada proyecto.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[var(--ink-soft)]">
                <li>Desarrollo y mantenimiento de funcionalidades frontend y backend, incluyendo lógica de negocio y manejo de datos.</li>
                <li>Optimización de rendimiento, Core Web Vitals, SEO técnico y accesibilidad en sitios en producción.</li>
                <li>Integración de servicios y gestión de contenido dinámico.</li>
                <li>Diagnóstico y resolución de incidencias para mantener la estabilidad y continuidad de los sistemas.</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="border-t border-[var(--line)] pt-8">
          <h3 className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-5">
            <BriefcaseBusiness size={14} /> Proyectos destacados
          </h3>

          <ul className="space-y-4">
            {selectedWork.map((item, index) => (
              <li
                key={item.name}
                className={`flex items-start justify-between gap-4 pb-4 ${index !== selectedWork.length - 1 ? "border-b border-[var(--line)]" : ""}`}
              >
                <div>
                  <p className="text-[var(--ink-strong)]">{item.name}</p>
                  <p className="text-sm text-[var(--ink-soft)]">{item.description}</p>
                </div>
                {item.href ? (
                  <a
                    className="text-[var(--ink-soft)] mt-0.5"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visitar el proyecto ${item.name}`}
                    title={`Visitar ${item.name}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="text-[var(--ink-soft)] mt-0.5">
                    <ArrowUpRight size={16} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;
