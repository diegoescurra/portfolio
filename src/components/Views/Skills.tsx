import React from 'react'

import OrbitingCircles from "../magicui/orbiting-circles";
import { JavaIcon, JavaScriptIcon, MySQLIcon, NodeJSIcon, PostgreSQLIcon, ReactJsIcon } from '../Icons';
import EmblaCarousel from '../shareds/EmblaCarousel';
import { certificates } from '../../data/certificates';



export function OrbitingCirclesDemo() {


  return (
    <div className="relative flex w-full h-[490px] items-center justify-center overflow-hidden ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[28px] w-[28px] lg:w-[49px] border-none "
        duration={20}
        delay={20}
        defaultRadius={70}
        smallScreenRadius={35}
      >
        <ReactJsIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[28px] w-[28px] lg:w-[49px] border-none"
        duration={20}
        delay={10}
        defaultRadius={70}
        smallScreenRadius={35}
      >
        <NodeJSIcon />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[40px] w-[40px] lg:w-[56px] border-none "
        reverse
        defaultRadius={140}
        smallScreenRadius={91}
        duration={20}
      >
        <PostgreSQLIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[35px] w-[35px] lg:w-[56px] border-none bg-transparent"
        reverse
        defaultRadius={140}
        smallScreenRadius={91}
        duration={20}
        delay={20}
      >
        <MySQLIcon />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[35px] w-[35px] lg:w-[63px] border-none "
        defaultRadius={210}
        smallScreenRadius={140}
        duration={20}
        delay={20}
      >
        <JavaIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[28px] w-[28px] lg:w-[63px] border-none"
        defaultRadius={210}
        smallScreenRadius={140}
        duration={20}
      >
        <JavaScriptIcon />
      </OrbitingCircles>

    </div>
  );
}




const Skills = () => {
  return (
    <section id='habilidades' className='lg:p-10 p-4'  style={{backgroundImage: 'url("/bg-dark.jpg")', backgroundPosition: 'center'}}>
      <h2 className="text-white pb-4 lg:text-5xl text-center text-3xl tracking-widest uppercase">
        Habilidades
      </h2>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative flex justify-center items-center">
          <OrbitingCirclesDemo />
         
        </div>
        
        <div className="relative flex flex-col justify-center items-center mt-10">
          <div className="flex justify-center items-center">
            <EmblaCarousel slides={certificates} />
          </div>
          
        </div>
      </div>
    </section>
  )
}



export default Skills