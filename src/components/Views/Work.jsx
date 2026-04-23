import { memo } from "react";
import { Terminal } from "lucide-react";
import { AstroIcon, MySQLIcon, NodeJSIcon, ReactJsIcon, NextIcon, PostgreSQLIcon, SupabaseIcon, SanityIcon } from "../Icons";
import { workItems } from "../../data/work";

const ICON_MAP = {
  react: ReactJsIcon,
  node: NodeJSIcon,
  mysql: MySQLIcon,
  astro: AstroIcon,
  reactNative: ReactJsIcon,
  next: NextIcon,
  postgre: PostgreSQLIcon,
  supabase: SupabaseIcon,
  sanity: SanityIcon
};

const WorkHighlights = memo(function WorkHighlights({ items }) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[#ffffffb3] p-4 mb-5">
      <h3 className="text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-2">Aportes principales</h3>
      <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--ink-soft)] leading-relaxed">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

const WorkStack = memo(function WorkStack({ stack }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => {
        const IconComponent = ICON_MAP[tech];
        if (!IconComponent) return null;

        const label = tech === "node" ? "Node.js" : tech.charAt(0).toUpperCase() + tech.slice(1);
        const displayLabel = label === "ReactNative" ? "React Native" : label;

        return (
          <span
            key={tech}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)]"
          >
            <span className="h-4 w-4 [&>svg]:h-full [&>svg]:w-full">
              <IconComponent className="h-full w-full" />
            </span>
            {displayLabel}
          </span>
        );
      })}
    </div>
  );
});

const WorkMedia = memo(function WorkMedia({ mainImage, gallery, title }) {
  const mainImageNode = (
    <img
      src={mainImage.src}
      alt={mainImage.alt}
      className="w-full aspect-[16/10] object-cover rounded-2xl"
      loading="lazy"
    />
  );

  return (
    <div className="rounded-3xl border border-[var(--line)] bg-white p-4">
      {mainImage.href ? (
        <a href={mainImage.href} target="_blank" rel="noreferrer" aria-label={`Abrir proyecto ${title}`}>
          {mainImageNode}
        </a>
      ) : (
        mainImageNode
      )}

      {gallery?.length ? (
        <div className="grid grid-cols-2 gap-3 mt-4">
          {gallery.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full aspect-[4/3] object-cover rounded-xl"
              loading="lazy"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
});

const WorkCard = memo(function WorkCard({ item, reverse = false }) {
  return (
    <article className="rounded-[28px] border border-[var(--line)] bg-[var(--bg-surface)] p-5 lg:p-8 shadow-[0_14px_28px_rgba(30,42,42,0.06)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className={`lg:col-span-5 ${reverse ? "order-2 lg:order-1" : ""}`}>
          {item.href ? (
            <a className="text-2xl lg:text-4xl mb-1 block text-[var(--ink-strong)]" target="_blank" href={item.href} rel="noreferrer">
              {item.title}
            </a>
          ) : (
            <h3 className="text-2xl lg:text-4xl mb-1 text-[var(--ink-strong)]">{item.title}</h3>
          )}

          <p className="italic text-sm">{item.subtitle}</p>
          <p className="my-4 text-sm lg:text-base leading-relaxed">{item.description}</p>
          <WorkHighlights items={item.highlights} />
          <WorkStack stack={item.stack} />
        </div>

        <div className={`lg:col-span-7 ${reverse ? "order-1 lg:order-2" : ""}`}>
          <WorkMedia mainImage={item.mainImage} gallery={item.gallery} title={item.title} />
        </div>
      </div>
    </article>
  );
});

export const Work = () => {
  return (
    <section id="freelance" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--accent)]">
            <Terminal size={16} className="mr-2" /> Portafolio
          </div>
          <h2 className="text-4xl font-bold text-[var(--ink-strong)] mb-2">Proyectos desarrollados para necesidades reales.</h2>
          <p>Desarrollo de sitios y plataformas, trabajando en arquitectura, funcionalidades e integración de servicios, donde cada proyecto se construye en base a requerimientos concretos, cuidando estructura, interacción y funcionamiento.</p>
        </div>

        <div className="space-y-10">
          {workItems.map((item, index) => (
            <WorkCard key={item.id} item={item} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
