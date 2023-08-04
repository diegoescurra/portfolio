import React from 'react'
import { Layout } from '../Layout'
import { About } from './About'
import { Contact } from './Contact'



export const Home = () => {
    return (
        <>
            <main id="hero" className='flex items-center text-dark w-full h-full mt-xxs'>
                <Layout className='pt-0'>


                    <div className="flex items-center justify-between w-full h-auto ">
                        <div className='w-1/2 flex-col hidden smd:block'>
                            <img src='/Software-Developer.png' alt='Diego Escurra' className='w-lg h-auto ' />
                        </div>
                        <div className='w-full flex flex-col smd:w-1/2'>
                            <div className='text-arsenic text-7x1 mb-3 smd:text-8xl '>
                                Hablas pura mierda Foley
                            </div>
                            <p className='mb-2 p-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure mollitia quam maiores rem veniam fugit vero assumenda quae nulla velit quo, doloribus sapiente exercitationem ullam et qui odit. Distinctio, repellendus.</p>
                        </div>
                    </div>


                </Layout>
            </main>
            <section id="about" className='flex items-center text-dark w-full h-full'>
                <About />
            </section>
            <section id="contact" className='flex justify-center text-dark w-full h-full'>
                <Contact />
            </section>
        </>
    )
}
