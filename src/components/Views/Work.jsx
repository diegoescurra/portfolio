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
              href="https://altomontebienesraices.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/Altomonte_home.png"
                alt="Imagen principal"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://altomontebienesraices.com/propiedades"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/Altomonte_propiedades.png"
                  alt="Imagen secundaria 1"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </a>
              <a
                href="https://altomontebienesraices.com/propiedad/101"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/Altomonte_propiedad.png"
                  alt="Imagen secundaria 2"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-1 py-14 items-center">
            <div className="border-r-2  border-shadowc h-5/6"></div>
          </div>
          <div className="col-span-1 lg:col-span-4 flex flex-col justify-center p-4">
            <a className="text-2xl lg:text-4xl mb-1 text-arsenic font-light" href="https://altomontebienesraices.com">
              Sitio Web Altomonte Bienes Raíces.
            </a>
            <p className="font-light italic">Proyecto Freelance</p>
            <p className="my-4 text-sm lg:text-base">
            Diseño e implementación del sitio web para Altomonte Bienes Raíces, una agencia con más de 20 años en el mercado de bienes raíces, especializada en ofrecer una experiencia personalizada en la compra y venta de propiedades.
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
