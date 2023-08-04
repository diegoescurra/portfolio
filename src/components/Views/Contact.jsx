import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Layout } from '../Layout';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xaygqawn");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
   
      <div className="w-xl p-4 mb-7">
        <h2 className='text-arsenic mb-3 p-4 text-5xl text-center'>Contacto</h2>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
         <div className="grid items-center border-b border-pastel-cyan py-2">
         <div className="mb-4">

         <input 
         className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
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
        className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
        id="message"
        name="message"
        placeholder="message" 
      />
      </div>
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className='mb-4'>

      <button type="submit" className='flex-shrink-0 bg-shadowc hover:bg-arsenic border-shadowc hover:border-arsenic text-sm border-4 text-white py-1 px-2 rounded' disabled={state.submitting}>
        Submit
      </button>
      </div>
      
    </form>
    </div>
  );
}
