import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Layout } from '../Layout';
import { ContactSvg } from '../Icons';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xaygqawn");
  if (state.succeeded) {
    return (
      <div className="h-11">

        <p className='text-arsenic text-4x1 mb-4'>Gracias por tu mensaje</p>
      </div>
    );
  }
  return (

    <div className="w-5/6 p-4 ">
      <h2 className='text-arsenic p-4 text-5xl text-center'>Contacto</h2>
      <div className="relative left-0 top-0">
      
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8'>
        <div className="grid items-center border-b border-pastel-cyan">
          <div className='my-4'> 


            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              name='name'
              type="text"
              placeholder="Jane Doe"
            />
          </div>
          <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      </div>
      <div className="grid items-center border-b border-pastel-cyan py-2">
          <div className="mb-4">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              name='email'
              type="email"
              placeholder="janedoe@blindspot.com"
            />
          </div>
        </div>
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <div className="mb-4">
          <div className="grid items-center border-b border-pastel-cyan py-2">
            <textarea
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 h-44 leading-tight focus:outline-none'
              id="message"
              name="message"
              placeholder="Mensaje"
            />
          </div>
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className='my-7 flex justify-end'>

          <button type="submit" className='flex-shrink-0 bg-shadowc hover:bg-arsenic border-shadowc hover:border-arsenic text-sm border-4 text-white py-1 px-2 mb-4 rounded' disabled={state.submitting}>
            Enviar
          </button>
        </div>

      </form>
      
      </div>
    </div>
  );
}
