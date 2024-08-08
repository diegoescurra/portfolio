import { useForm, ValidationError } from "@formspree/react";

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
