import { JQueryIcon, MySQLIcon, NodeJSIcon } from "../Icons";

export const Work = () => {
  return (
    <section
      id="portfolio"
      className="bg-[#ecf0f1] text-[#333] w-full  mx-auto px-4"
    >
      <div>
        <h2 className="text-shadowc pb-4 mb-14 lg:text-5xl text-center text-3xl  tracking-widest">
          PORTAFOLIO
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-screen-xl">
          <div className="col-span-1 lg:col-span-7">
            <a
              href="https://hillsbienesraices.cl/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Hills.png"
                alt="Imagen principal"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://hillsbienesraices.cl/buscar_propiedades"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/hills2.png"
                  alt="Imagen secundaria 1"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </a>
              <a
                href="https://hillsbienesraices.cl/propiedades/edificio-tantum"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/hills3.png"
                  alt="Imagen secundaria 2"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-1 items-center">
            <div className="border-r-2 py-4 border-arsenic h-5/6"></div>
          </div>
          <div className="col-span-1 lg:col-span-4 flex flex-col justify-center p-4">
            <h2 className="text-2xl lg:text-4xl mb-1 text-arsenic font-light">
              Sitio Web Hills Bienes Raíces.
            </h2>
            <p className="font-light italic">Proyecto Freelance</p>
            <p className="my-4 text-sm lg:text-base">
            Diseño e implementación del sitio web para Hills Bienes Raíces, una agencia con más de 20 años en el mercado de bienes raíces, especializada en ofrecer una experiencia personalizada en la compra y venta de propiedades.
            </p>
            <div className="flex justify-between gap-4 w-56">
              <JQueryIcon />
              <MySQLIcon />
              <NodeJSIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
