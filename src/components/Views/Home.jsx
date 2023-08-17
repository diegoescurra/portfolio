import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Layout } from '../Layout'
import { About } from './About'
import { Contact } from './Contact'
import { Footer } from '../shareds/footer/Footer'
import { Skills } from './Skills'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'



export const Home = () => {

    const hero = useRef();
    const img = useRef();
    const text = useRef();
    const about = useRef();
    const contact = useRef();
    gsap.registerPlugin(ScrollTrigger);



  
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(img.current, { opacity: 0, x:-100, duration: 1, ease: "power2.inOut",})
            gsap.from(text.current, { opacity: 0, x:100, duration: 1, ease: "power2.inOut",} )
            gsap.fromTo(about.current,{opacity: 0, y:200},{opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: about.current}})
            gsap.fromTo(contact.current,{opacity: 0, x:-2200},{opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: contact.current}})
        },)
        return () => ctx.revert();
    },[])



    
    return (
        <>
            <Layout className='text-arsenic' >
            <main ref={hero} id="hero" className='flex items-center justify-items-center w-full h-screen smd:h-full main p-4'>


                    <div className="w-full h-auto grid grid-cols-1 sxl:grid-cols-2 ">
                        
                        <div ref={text} className='w-full flex flex-col justify-center'>
                            <h1 className='text-7xl smd:text-8xl mb-3 text-center smd:text-start'>
                                Diego Escurra
                            </h1>
                            <p className='mb-2 p-2 text-3xl text-center smd:text-start '>Desarrollador Full Stack</p>
                        </div>
                        <div className='flex-col'>
                            <img ref={img} src='/Software-Developer.png' alt='Diego Escurra' className='w-lg h-auto ' />
                        </div>
                    </div>
                   

               
                </main>
            <section ref={about} id="about" className='flex items-center text-dark w-full h-full smd:pt-14 pt-4'>
                <About />
            </section>
            {/* 
            <section id='skills' className='flex items-center w-full  section'>
                <Skills/>
            </section>
            */}
            <section ref={contact} id="contact" className='flex justify-center text-dark  h-full '>
                <Contact />
            </section>
            </Layout>
            <Footer />
        </>
    )
}
