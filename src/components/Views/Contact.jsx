import { useForm, ValidationError } from "@formspree/react";
import { Mail, Sparkles, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from "../Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xaygqawn");


  if (state.succeeded ) {

    return (
      <>
   
          <div className="p-4 border-b text-gray-300 text-center">
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
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium mb-4">
            <Sparkles size={16} className="mr-2" /> Conectémos
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ponte en Contacto</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6 text-indigo-950" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border  border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="Tu mensaje..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white py-3 px-6 rounded-lg hover:bg-indigo-800 transition-colors flex items-center justify-center gap-2"
              >
                Enviar
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:pl-8">
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600">
              Siempre estoy interesado en conocer nuevos proyectos y oportunidades. Si tienes una pregunta o solo quieres saludar, llena el formulario y te responderé.
              </p>
            </div>

            <div className="space-y-6">
           
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <LinkedinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">LinkedIn</span>
                </a>

                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gray-950 rounded-lg flex items-center justify-center">
                 <GitHubLogoIcon className="w-6 h-6 text-gray-50" />
                  </div>
                  <span className="font-medium text-gray-900">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};
