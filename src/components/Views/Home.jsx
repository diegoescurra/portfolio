import React from 'react'
import { Layout } from '../Layout'
import { About } from './About'
import { Cards } from '../shareds/Cards'

export const Home = () => {
  return (
    <>
    <main className='flex items-center text-dark w-full h-full'>
        <Layout className='pt-0'>
        

            <div className="flex items-center justify-between w-full">
                <div className='w-1/2 flex-col hidden smd:block'>
                    <img src='/img.png' alt='Diego Escurra' className='w-md h-auto ' />
                </div>
                <div className='w-full flex flex-col smd:w-1/2'>
                <div className='text-arsenic font-bold text-7xl mb-2 smd:text-8xl '> 
                     Hablas pura mierda Foley
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure mollitia quam maiores rem veniam fugit vero assumenda quae nulla velit quo, doloribus sapiente exercitationem ullam et qui odit. Distinctio, repellendus.</p>
                </div>
            </div>
           
            
        </Layout>
    </main>
    <section className='flex items-center text-dark w-full h-aut'>
    <Layout className='pt-0'>
    <div className="flex items-center justify-between w-full">
                <div className='w-full flex-col'>
                <Cards />
                </div>   
                 
            </div>
            </Layout>
    </section>
    </>
  )
}
