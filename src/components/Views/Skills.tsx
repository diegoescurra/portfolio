import React from 'react'

import OrbitingCircles from "../magicui/orbiting-circles";
import { JavaIcon, JavaScriptIcon, MySQLIcon, NodeJSIcon, PostgreSQLIcon, ReactJsIcon } from '../Icons';
import EmblaCarousel from '../shareds/EmblaCarousel';
import { certificates } from '../../data/certificates';



export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[49rem] items-center justify-center overflow-hidden ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Skills
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none "
        duration={20}
        delay={20}
        radius={80}
      >
        <ReactJsIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none"
        duration={20}
        delay={10}
        radius={80}
      >
        <NodeJSIcon />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none "
        reverse
        radius={140}
        duration={20}
      >
        <PostgreSQLIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={140}
        duration={20}
        delay={20}
      >
        <MySQLIcon />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[50px] w-[50px] border-none "
        radius={210}
        duration={20}
        delay={20}
      >
        <JavaIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none"
        radius={210}
        duration={20}
      >
        <JavaScriptIcon />
      </OrbitingCircles>

    </div>
  );
}




const Skills = () => {
  return (
    <section id='habilidades' className='p-10'  style={{backgroundImage: 'url("/bg-dark.jpg")', backgroundPosition: 'center'}}>
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