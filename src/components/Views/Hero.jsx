import { ChevronDown, BriefcaseBusiness, ArrowRight, Globe, Database } from 'lucide-react';
import OrbitingCirclesDemo from './OrbitingCirclesDemo';

export const Hero = () => {
  return (
    <section className="min-h-dvh relative" id='inicio'>
      {/* <div className="absolute inset-0">
        <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-marquee"></div>
        <div className="hidden md:block absolute top-40 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-marquee-vertical animation-delay-4000"></div>
      </div> */}

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--accent)]">
                <BriefcaseBusiness size={16} className="mr-2" /> Disponible para oportunidades frontend/full stack
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-[var(--ink-strong)] leading-tight">
                <span className="block">Diego Escurra</span>
                <span className="block mt-3 text-[var(--accent)] text-2xl md:text-4xl">Creo productos web claros, rápidos y pensados para negocio real.</span>
              </h1>

              <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
                He trabajado en proyectos reales desarrollando soluciones a medida, desde landing pages hasta plataformas con backend.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#freelance" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--accent)] text-[#effbf7] font-medium hover:brightness-95 transition">
                  Ver proyectos <ArrowRight size={16} />
                </a>
                <a href="https://www.linkedin.com/in/diego-escurra/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--ink-strong)] font-medium hover:border-[var(--accent)] transition">
                  LinkedIn
                </a>
                <a href="https://github.com/diegoescurra" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--ink-strong)] font-medium hover:border-[var(--accent)] transition">
                  GitHub
                </a>
              </div>

              <div className="pt-8 border-t border-[var(--line)]">
                <p className="text-sm mb-4 uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                  Stack principal
                </p>

                <div className="flex flex-wrap gap-10">

                  {/* Frontend */}
                  <div className="flex flex-col gap-2 text-[var(--ink-soft)]">
                    <div className="flex items-center gap-2">
                      <Globe size={24} /> Frontend
                    </div>
                    <p className="text-sm text-[var(--ink-soft)]/80">
                      React · Nuxt · Astro · Tailwind
                    </p>
                  </div>

                  {/* Backend */}
                  <div className="flex flex-col gap-2 text-[var(--ink-soft)]">
                    <div className="flex items-center gap-2">
                      <Database size={24} /> Backend
                    </div>
                    <p className="text-sm text-[var(--ink-soft)]/80">
                      Node.js · Java · Spring · MySQL · PostgreSQL
                    </p>
                  </div>

                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full h-[600px] overflow-hidden">
                <OrbitingCirclesDemo className={"border-gray-500"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[var(--ink-soft)]" size={32} />
      </div>
    </section>
  );
};
