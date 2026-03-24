import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";

const selectedWork = [
  {
    name: "Centro Cultural La Moneda",
    description:
     "Mantenimiento en entorno de producción, resolviendo errores y asegurando estabilidad tras cambios en el sistema.",
  },
  {
    name: "Experiencia Tomasina",
    description:
      "Implementación de validaciones de formularios y filtro de búsqueda, junto a integración con servicios externos mediante n8n y configuración de proxy con Nginx.",
    href: "https://experienciatomasina.ust.cl/"
  },
  {
    name: "Training for Women",
    description:
      "Mejora de lógica de asignación de rutinas y adaptación del frontend para soportar nueva estructura de datos y visualización de ejercicios.",
    href: "https://tfw.idastage.com/"
  },
];

export const ExperienceShowcase = () => {
  return (
    <section className="py-20 relative" id="experiencia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-14">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">Experiencia profesional</p>
          <h2 className="text-4xl md:text-5xl text-[var(--ink-strong)] mb-4">Experiencia actual en IDA</h2>
          <p className="max-w-3xl leading-relaxed">
            Actualmente trabajo como Full Stack Developer en proyectos reales para clientes e instituciones, con foco en calidad técnica, rendimiento y mantenibilidad.
          </p>
        </header>

        <article className="border-t border-[var(--line)] pt-10 pb-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-2xl text-[var(--ink-strong)] mb-2">IDA</p>
              <p className="text-sm text-[var(--ink-soft)] mb-1">Full Stack Developer</p>
              <p className="text-sm text-[var(--ink-soft)]">2025 - Actualidad</p>
            </div>

            <div className="lg:col-span-8">
              <p className="leading-relaxed mb-6">
                En IDA desarrollo y mantengo soluciones digitales en entornos de producción, colaborando con equipos de diseño y contenido para llevar experiencias web desde la definición funcional hasta su implementación técnica. Trabajo de forma remota en proyectos para clientes de la empresa, con responsabilidad directa en arquitectura frontend y backend, calidad de código, performance y SEO técnico.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[var(--ink-soft)]">
                <li>Optimización de rendimiento, Core Web Vitals y SEO técnico en sitios institucionales.</li>
                <li>Colaboración transversal con diseño y producto para traducir requerimientos en soluciones implementables.</li>
                <li>Implementación de arquitectura frontend escalable, mantenible y orientada a largo plazo.</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="border-t border-[var(--line)] pt-8">
          <h3 className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-5">
            <BriefcaseBusiness size={14} /> Proyectos destacados en esta etapa
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
                  <a className="text-[var(--ink-soft)] mt-0.5" href={item.href} target="_blank" rel="noreferrer">
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
