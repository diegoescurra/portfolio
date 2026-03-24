const About = () => {
  return (
    <section className="py-20" id="sobre-mi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 rounded-3xl bg-[var(--bg-surface)] border border-[var(--line)] p-8 shadow-[0_12px_30px_rgba(30,42,42,0.05)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">Perfil</p>
          <h2 className="text-3xl md:text-4xl text-[var(--ink-strong)] mb-4">Experiencia construyendo productos de principio a fin.</h2>
          <p className="leading-relaxed">
           Trabajo con clientes y equipos para convertir necesidades de negocio en soluciones digitales claras y funcionales. Me involucro en todo el proceso, desde la definición de la interfaz hasta el desarrollo de backend, APIs y despliegue.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--bg-surface)] p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-3">Enfoque</p>
            <h3 className="text-xl mb-2 text-[var(--ink-strong)]">Producto + experiencia</h3>
            <p>Diseño interfaces claras y funcionales, alineadas a cómo realmente usan los productos los usuarios.</p>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-[var(--bg-surface)] p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-3">Metodologia</p>
            <h3 className="text-xl mb-2 text-[var(--ink-strong)]">Entrega incremental</h3>
            <p>Trabajo en ciclos cortos, validando con feedback temprano y ajustando el producto en base a uso real.</p>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-[var(--bg-surface)] p-6 sm:col-span-2">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-3">Experiencia reciente</p>
            <h3 className="text-xl mb-2 text-[var(--ink-strong)]">Freelance y productos internos</h3>
            <p>
              Desarrollo de sitios web y plataformas internas para operaciones reales, incluyendo landing pages, paneles administrativos y sistemas conectados a backend, con foco en rendimiento y mantenibilidad.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
