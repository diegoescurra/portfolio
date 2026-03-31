import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";

const selectedWork = [
  {
    name: "Centro Cultural La Moneda",
    description:
     "Participación activa en entorno de producción, abordando incidencias recurrentes y asegurando la estabilidad del sistema tras cambios y despliegues. Trabajo enfocado en diagnóstico y resolución de problemas en código e integraciones.",
  },
  {
    name: "Experiencia Tomasina",
    description:
      "Desarrollo de soluciones frontend y backend centradas en la integración de servicios y manejo de contenido dinámico, incluyendo la migración desde WordPress a una estructura basada en Markdown y la implementación de Nginx como reverse proxy para encapsular el acceso a servicios externos.",
    href: "https://experienciatomasina.ust.cl/"
  },
  {
    name: "Training for Women",
    description:
      "Desarrollo de la lógica de asignación de rutinas para clientes, reorganizando la relación entre macrociclos, ejercicios y planes de entrenamiento, junto con la adaptación del frontend y resolución de incidencias previas a la entrega del proyecto.",
    href: "https://t4w.cl/"
  },
];

export const ExperienceShowcase = () => {
  return (
    <section className="py-20 relative z-0" id="experiencia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-14">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">Experiencia profesional</p>
          <h2 className="text-4xl md:text-5xl text-[var(--ink-strong)] mb-4">Experiencia en IDA</h2>
          <p className="max-w-3xl leading-relaxed">
            Participé en el desarrollo y evolución de soluciones web en producción, trabajando con distintos clientes e instituciones. Mi enfoque estuvo en construir funcionalidades robustas, mejorar el rendimiento y asegurar una experiencia consistente para el usuario final.
          </p>
        </header>

        <article className="border-t border-[var(--line)] pt-10 pb-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-2xl text-[var(--ink-strong)] mb-2">Full Stack Developer</p>
              <p className="text-sm text-[var(--ink-soft)]">2025 - marzo 2026</p>
            </div>

            <div className="lg:col-span-8">
              <p className="leading-relaxed mb-6">
                Colaboré de forma transversal con equipos de diseño y producto, transformando requerimientos en soluciones técnicas implementables y mantenibles.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[var(--ink-soft)]">
                <li>Colaboración transversal con equipos de diseño y contenido, traduciendo requerimientos en soluciones técnicas implementables y mantenibles.</li>
                <li>Desarrollo y mantenimiento de funcionalidades frontend y backend, abarcando lógica de negocio y modelado de datos.</li>
                <li>Optimización de rendimiento y Core Web Vitals en sitios en producción, reduciendo tiempos de carga y mejorando la experiencia de usuario.</li>
                <li>Resolución de incidencias en entornos productivos, asegurando estabilidad y continuidad operativa.</li>
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
