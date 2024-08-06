import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xaygqawn");
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    if (state.succeeded) {
     setIsOpen(true)
    }
   }, [state.succeeded])

  if (state.succeeded && isOpen) {

    return (
      <>
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        ></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-1/3 shadow-lg rounded-lg">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">
              Mensaje Enviado
            </h3>
          </div>
          <div className="p-4">
            <p className="text-gray-600">
              Gracias por tu mensaje. Nos pondremos en contacto contigo a la
              brevedad.
            </p>
          </div>
          <div className="p-4 border-t flex justify-end">
            <button
              onClick={setIsOpen(false)}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      </>
    );
  }


  
  return (
    <section id="contacto" className="w-full px-4 py-10 max-w-screen-xl mx-auto">
      
        <h2 className="max-w-3xl text-2xl font-semibold text-white md:text-2xl lg:text-4xl mb-4">
          Contacto
        </h2>

        <div className="bg-transparent shadow shadow-white rounded-lg p-6 mb-6">
          <div className="text-center p-4">
            <p className="text-lg text-gray-200">
              Si deseas comunicarte conmigo completa este formulario
            </p>
          </div>

          <form onSubmit={handleSubmit} >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="text-gray-300 font-bold mb-2 block"
              >
                Nombre
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                required
              />
            </div>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <div className="mb-5">
              <label
                htmlFor="email"
                className="text-gray-300 font-bold mb-2 block"
              >
                Correo
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="tuemail@ejemplo.com"
                required
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="mb-5">
              <label
                htmlFor="message"
                className="text-gray-300 font-bold mb-2 block"
              >
                Mensaje
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                required
              />
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gray-700 py-2 px-4 rounded-sm"
                disabled={state.submitting}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
    </section>
  );
};
