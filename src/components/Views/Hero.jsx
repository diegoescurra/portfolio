import { ChevronDown, Terminal, Database, Globe } from 'lucide-react';
import OrbitingCirclesDemo from './OrbitingCirclesDemo';

export const Hero = () => {
  return (
   
    <section className="min-h-screen relative" id='inicio'>
      <div className="absolute inset-0">
        <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-marquee"></div>
        <div className="hidden md:block absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-marquee-vertical animation-delay-4000"></div>
      </div>

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium">
                <Terminal size={16} className="mr-2" /> Disponible para trabajar
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                <span className="block">Diego Escurra</span>
                <span className="block mt-2 text-indigo-600 text-3xl md:text-5xl">Creando Soluciones Digitales</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl">
              Full Stack Developer especializado en convertir ideas complejas en experiencias digitales simples y funcionales.
              </p>

              {/* Tech stack icons */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Tech Stack</p>
                <div className="flex flex-wrap gap-12">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Globe size={24} /> Frontend
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Database size={24} /> Backend
                  </div>
                 
                </div>
              </div>
            </div>

            {/* Right column - Visual element */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[600px] overflow-hidden">
                <OrbitingCirclesDemo className={"border-gray-500"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </section>

  );
};
