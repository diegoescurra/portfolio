import React, { useLayoutEffect, useRef } from 'react';
import { Cards } from '../shareds/Cards';
import { projects } from '../../data/projects';
import { gsap } from 'gsap';


export const About = () => {

    const about = useRef(null);
    const cards = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(cards.current, { opacity: 0, y:200, duration: 1, ease: "power2.inOut",})
           
        },about)
        return () => ctx.revert();
    },[])

    return (
        <div ref={about} className='w-full h-full'>
            <div ref={cards}>
                <h2 className='text-arsenic p-4 text-5xl text-center mb-7'>Proyectos</h2>

                <div className="grid grid-cols-1 gap-4 w-full justify-center sxl:grid-cols-2">
                    {projects.map((card, index) => (
                        <div className='flex justify-center'>
                            <Cards key={index} {...card} />
                        </div>

                    ))}

                </div>
            </div>

        </div>
    )
}
