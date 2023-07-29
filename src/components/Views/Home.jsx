import React from 'react'
import { Layout } from '../Layout'
import { About } from './About'
import { Cards } from '../shareds/Cards'

const cardsData = [
    {
        img: '/Hills.png',
        title: 'Hills Bienes Raíces',
        href: 'https://hillsbienesraices.cl/',
        buttontxt: 'Visitar el sitio',
        description: 'Descubre las mejores propiedades en Hills Bienes Raíces. Tu hogar ideal está a un clic de distancia. ¡Comienza a vivir la experiencia!',
    },
    {
        img: '/metas.png',
        title: 'Metas app',
        href: 'https://github.com/Sie7he/academiaX',
        buttontxt: 'Visitar Repositorio',
        description: 'Una aplicación CRUD versátil y eficiente para gestionar metas. Potencia tus proyectos con esta herramienta práctica y fácil de usar.',
    },
    {
        img: '/Hills.png',
        title: 'Hills Bienes Raíces',
        href: 'https://hillsbienesraices.cl/',
        buttontxt: 'Visitar el sitio',
        description: 'Sitio oficial de la agencia de bienes raíces',
    },
];

export const Home = () => {
    return (
        <>
            <main className='flex items-center text-dark w-full h-full mt-7'>
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
            <section className='flex items-center text-dark w-full h-auto mt-7 '>
                <Layout className='pt-0'>
                    <h2 className='text-arsenic text-5x1 mb-3 p-4 smd:text-7xl text-center'>Proyectos</h2>

                    <div class="grid grid-cols-1 gap-4 w-full justify-center sxl:grid-cols-2">


                        {cardsData.map((card, index) => (
                            <div className='flex justify-center'>
                                <Cards key={index} {...card} />
                            </div>

                        ))}

                    </div>

                </Layout>
            </section>
        </>
    )
}
