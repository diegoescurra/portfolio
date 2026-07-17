const About = () => {
  return (
    <section className="py-20" id="sobre-mi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 rounded-3xl bg-[var(--bg-surface)] border border-[var(--line)] p-8 shadow-[0_12px_30px_rgba(30,42,42,0.05)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">Perfil</p>
          <h2 className="text-3xl md:text-4xl text-[var(--ink-strong)] mb-4">Desarrollo soluciones web de principio a fin.</h2>
          <p className="leading-relaxed">
            Trabajo con clientes y equipos para transformar necesidades concretas en sitios, aplicaciones y funcionalidades mantenibles. Participo desde la definición de la solución hasta el desarrollo frontend, backend, integraciones y puesta en producción.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--bg-surface)] p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-3">Enfoque</p>
            <h3 className="text-xl mb-2 text-[var(--ink-strong)]">Claridad y funcionalidad</h3>
            <p>Desarrollo interfaces fáciles de entender y soluciones ajustadas a los objetivos, usuarios y requerimientos de cada proyecto.</p>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-[var(--bg-surface)] p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-3">Metodología</p>
            <h3 className="text-xl mb-2 text-[var(--ink-strong)]">Avance por etapas</h3>
            <p>Organizo el trabajo en entregas parciales, revisando avances y realizando ajustes antes de completar el proyecto.</p>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-[var(--bg-surface)] p-6 sm:col-span-2">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-3">Servicios</p>
            <h3 className="text-xl mb-2 text-[var(--ink-strong)]">Desarrollo para clientes</h3>
            <p>
              Creo sitios y aplicaciones web a medida, desde landing pages y sitios corporativos hasta soluciones conectadas a APIs, bases de datos y paneles de administración.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
