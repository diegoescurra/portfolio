import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Layout } from '../Layout'
import { About } from './About'
import { Contact } from './Contact'
import { Footer } from '../shareds/footer/Footer'
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
            <main ref={hero} id='hero' className="container flex flex-col justify-center p-6 mx-auto ssm:py-12 slg:py-24 slg:flex-row slg:justify-around">
	
		<div className="flex items-center justify-center p-6 mt-8 slg:mt-0 h-72 ssm:h-80 slg:h-96 sxl:h-112 2xl:h-128">
			<img src="/Software-Developer.png" alt="" className="object-contain h-72 ssm:h-80 slg:h-96 sxl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm slg:max-w-md sxl:max-w-xl slg:text-left ">
			<h1 className="text-5xl font-bold ssm:text-7xl mb-2">Diego Escurra
				
			</h1>
            <h2 className='text-2xl ssm:text-3xl text-shadowc px-0.5'>Desarrollador Full Stack</h2>
			<p className="mt-6 mb-8 text-lg ssm:mb-12 italic">“People keep asking me if I’m back. And I really haven’t had an answer. But now, yeah, I’m thinking I’m back!”</p>
			
		</div>

</main>

            <section ref={about} id="about" className='flex items-center text-dark w-full h-full smd:pt-14 pt-4'>
                <About />
            </section>
           
            <section ref={contact} id="contact" className='flex justify-center text-dark  h-full '>
                <Contact />
            </section>
            </Layout>
            <Footer />
        </>
    )
}
