import { useForm, ValidationError } from "@formspree/react";
import { Sparkles, Send } from 'lucide-react';
import { LinkedinIcon } from "../Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xaygqawn");


  if (state.succeeded ) {

    return (
      <>

          <div className="p-4 border-b text-[var(--ink-soft)] text-center" id="contacto">
            <h3 className="text-lg font-semibold ">
              Mensaje Enviado
            </h3>
          </div>
          <div className="p-4 text-center">
            <p>
              Gracias por tu mensaje. Me pondré en contacto contigo a la brevedad.
            </p>
          </div>
      </>
    );
  }


  return (
    <section className="py-20 relative overflow-hidden" id="contacto">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-amber-50/40">
        <div className="absolute top-20 right-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--accent)]">
            <Sparkles size={16} className="mr-2" /> Conectemos
          </div>
          <h2 className="text-4xl font-bold text-[var(--ink-strong)] mb-4">Ponte en contacto</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-[var(--bg-surface)] border border-[var(--line)] rounded-3xl shadow-[0_12px_30px_rgba(30,42,42,0.08)] p-8">
            <form className="space-y-6 text-[var(--ink-strong)]" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nombre
                </label>
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-white focus:ring-2 focus:ring-emerald-500/40 focus:border-transparent transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-white focus:ring-2 focus:ring-emerald-500/40 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensaje
                </label>
                <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-white focus:ring-2 focus:ring-emerald-500/40 focus:border-transparent transition-colors"
                  placeholder="Tu mensaje..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--accent)] text-[#ecf9f6] py-3 px-6 rounded-xl hover:brightness-95 transition-colors flex items-center justify-center gap-2"
              >
                Enviar
                <Send size={16} />
              </button>
            </form>
          </div>

          <div className="space-y-8 lg:pl-8">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-surface)] p-6">
              <h3 className="text-2xl text-[var(--ink-strong)] mb-3">En qué puedo ayudarte:</h3>
              <ul className="list-disc space-y-2 text-[var(--ink-soft)] px-4">
                <li>Desarrollo frontend para productos web claros y funcionales</li>
                <li>Implementación de soluciones full stack para procesos y operaciones reales</li>
                <li>Rediseños de experiencia y optimización de performance web</li>
              </ul>
            </div>

            <div className="prose prose-lg">
              <p className="text-lg">
              Si tienes una oportunidad, un proyecto o una idea para mejorar una plataforma existente, escríbeme y te respondo pronto.
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/diego-escurra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 p-4 bg-[var(--bg-surface)] border border-[var(--line)] rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <LinkedinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-medium text-[var(--ink-strong)]">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/diegoescurra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 p-4 bg-[var(--bg-surface)] border border-[var(--line)] rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gray-950 rounded-lg flex items-center justify-center">
                 <GitHubLogoIcon className="w-6 h-6 text-gray-50" />
                  </div>
                  <span className="font-medium text-[var(--ink-strong)]">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};
