import React, { useLayoutEffect, useRef } from 'react';
import { Cards } from '../shareds/Cards';
import { projects } from '../../data/projects';
import { gsap } from 'gsap';


export const About = () => {


    return (
        <div  className='w-full h-full pt-14'>
            <div>
                <h2 className='text-arsenic p-14 text-5xl text-center mb-7'>Proyectos</h2>

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
