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
            gsap.fromTo(about.current,{opacity: 0, y:200},{opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: about.current}})
            gsap.fromTo(contact.current,{opacity: 0, x:-2200},{opacity: 1, x: 0, duration: 2, scrollTrigger: { trigger: contact.current}})
        },)
        return () => ctx.revert();
    },[])



    
    return (
        <>
            <main ref={hero} id="hero" className='flex items-center justify-items-center w-full main '>
                


                    <div className="flex items-center justify-between w-full h-auto ">
                        <div className='w-1/2 flex-col hidden smd:block'>
                            <img ref={img} src='/Software-Developer.png' alt='Diego Escurra' className='w-lg h-auto ' />
                        </div>
                        <div ref={text} className='w-full flex flex-col smd:w-1/2'>
                            <h1 className='text-arsenic text-5xl smd:text-8xl mb-3'>
                                Hablas Pura Mierda Foley
                            </h1>
                            <p className='mb-2 p-1 w-full smd:w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure mollitia quam maiores rem veniam fugit vero assumenda quae nulla velit quo, doloribus sapiente exercitationem ullam et qui odit. Distinctio, repellendus.</p>
                        </div>
                    </div>


               
                </main>
            <section ref={about} id="about" className='relative flex items-center text-dark w-full h-full pt-14 section'>
                <About />
            </section>
            {/* 
            <section id='skills' className='flex items-center w-full  section'>
                <Skills/>
            </section>
            */}
            <section ref={contact} id="contact" className='flex justify-center text-dark  h-full section'>
                <Contact />
            </section>
            
            <Footer />
        </>
    )
}
