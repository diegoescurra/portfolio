import React from 'react'

import OrbitingCircles from "../magicui/orbiting-circles";
import { JavaIcon, JavaScriptIcon, MySQLIcon, NodeJSIcon, PostgreSQLIcon, ReactJsIcon, SpringIcon } from '../Icons';



export function OrbitingCirclesDemo() {


  return (
    <div className="relative flex w-full h-[350px] lg:h-[490px] items-center justify-center overflow-hidden ">
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

      <OrbitingCircles
        className="h-[28px] w-[28px] lg:w-[63px] border-none"
        defaultRadius={210}
        smallScreenRadius={140}
        duration={20}
        delay={21}
      >
       <SpringIcon />
      </OrbitingCircles>

    </div>
  );
}








export default OrbitingCirclesDemo;