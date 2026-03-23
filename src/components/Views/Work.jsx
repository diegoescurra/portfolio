import { Terminal } from "lucide-react";
import {  AstroIcon, MySQLIcon, NodeJSIcon, ReactJsIcon } from "../Icons";

export const Work = () => {
  return (
    <section id="proyectos" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--accent)]">
            <Terminal size={16} className="mr-2" /> Portafolio
          </div>
          <h2 className="text-4xl font-bold text-[var(--ink-strong)] mb-2">Proyectos con clientes reales</h2>
          <p>Casos implementados para negocio real con foco en experiencia, conversion y escalabilidad.</p>
        </div>

        <div className="space-y-10">
          <article className="rounded-[28px] border border-[var(--line)] bg-[var(--bg-surface)] p-5 lg:p-8 shadow-[0_14px_28px_rgba(30,42,42,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5">
                <a className="text-2xl lg:text-4xl mb-1 block text-[var(--ink-strong)]" target="_blank" href="https://altomontebienesraices.com" rel="noreferrer">
                  Altomonte Bienes Raices
                </a>
                <p className="italic text-sm">Corredora de propiedades independiente · sitio web a medida</p>
                <p className="my-4 text-sm lg:text-base leading-relaxed">
                  Diseño y desarrollo de sitio web para corredora de propiedades independiente, orientado a mostrar propiedades de forma clara y facilitar el contacto con potenciales clientes. Se trabajó en la estructura de contenidos, experiencia mobile y optimización de rendimiento para mejorar la navegación.
                </p>

                <div className="rounded-2xl border border-[var(--line)] bg-[#ffffffb3] p-4 mb-5">
                  <h3 className="text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-2">Aportes principales</h3>
                  <ul className="list-disc space-y-2 text-sm text-[var(--ink-soft)] leading-relaxed px-3">
                    <li>Desarrollo fullstack de plataforma web a medida</li>
                    <li>Implementación de sistema de gestión y visualización de propiedades</li>
                    <li>Definición de arquitectura de contenido orientada a navegación clara</li>
                    <li>Optimización responsive con foco en experiencia mobile</li>
                    <li>Optimización de rendimiento para mejorar tiempos de carga</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)]">
                    <span className="h-4 w-4 [&>svg]:h-full [&>svg]:w-full"><ReactJsIcon /></span> React
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)]">
                    <span className="h-4 w-4 [&>svg]:h-full [&>svg]:w-full"><NodeJSIcon /></span> Node.js
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)]">
                    <span className="h-4 w-4 [&>svg]:h-full [&>svg]:w-full"><MySQLIcon /></span> MySQL
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <a href="https://altomontebienesraices.com/" target="_blank" rel="noreferrer" className="block rounded-3xl border border-[var(--line)] bg-white p-4">
                  <img
                    src="/altomonte_home.png"
                    alt="Altomonte home"
                    className="w-full aspect-[16/10] object-cover rounded-2xl mb-4"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <img
                      src="/altomonte_note.png"
                      alt="Detalle de propiedad"
                      className="w-full aspect-[4/3] object-cover rounded-xl"
                    />
                    <img
                      src="/altomonte_phones.png"
                      alt="Vista mobile"
                      className="w-full aspect-[4/3] object-cover rounded-xl"
                    />
                  </div>
                </a>
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-[var(--line)] bg-[var(--bg-surface)] p-5 lg:p-8 shadow-[0_14px_28px_rgba(30,42,42,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <h3 className="text-2xl lg:text-4xl mb-1 text-[var(--ink-strong)]">Ranut</h3>
                <p className="italic text-sm">Empresa de servicios y soporte para máquinas de café</p>
                <p className="my-4 text-sm lg:text-base leading-relaxed">
                  Diseño y desarrollo de una landing page para empresa de servicios de café, enfocada en comunicar de forma clara la oferta de reparación de máquinas, reposición de insumos y soporte técnico para oficinas y negocios en la Región de Valparaíso.
                </p>

                <div className="rounded-2xl border border-[var(--line)] bg-[#ffffffb3] p-4 mb-5">
                  <h3 className="text-sm uppercase tracking-[0.16em] text-[var(--ink-soft)] mb-2">Aportes principales</h3>
                  <ul className="list-disc space-y-2 text-sm text-[var(--ink-soft)] leading-relaxed px-3">
                    <li>Desarrollo completo de landing page desde cero utilizando Astro</li>
                    <li>Estructuración del contenido para explicar claramente los servicios ofrecidos</li>
                    <li>Diseño responsive optimizado para dispositivos móviles</li>
                    <li>Implementación de secciones orientadas a facilitar el contacto con clientes potenciales</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)]">
                    <span className="h-4 w-4 [&>svg]:h-full [&>svg]:w-full"><AstroIcon className="h-full w-full" /></span> Astro
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="rounded-3xl border border-[var(--line)] bg-white p-4">
                  <img
                    src="/Ranut.png"
                    alt="Ranut preview"
                    className="w-full aspect-[16/10] object-cover object-top rounded-2xl max-h-[420px]"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
