import React from 'react'

import OrbitingCircles from "../magicui/orbiting-circles";
import { JavaIcon, JavaScriptIcon, MySQLIcon, NodeJSIcon, PostgreSQLIcon, ReactJsIcon, SpringIcon } from '../Icons';



export function OrbitingCirclesDemo() {


  return (
    <div className="relative flex w-full h-[350px] lg:h-[560px] items-center justify-center">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-700 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent">
      </span>

     {/* Inner Circles */}
<OrbitingCircles
  className="h-[28px] w-[28px] lg:w-[49px] border-none"
  duration={120} // Más lento
  delay={0} // Espaciado uniforme
  defaultRadius={70}
  smallScreenRadius={35}
>
  <ReactJsIcon />
</OrbitingCircles>

<OrbitingCircles
  className="h-[28px] w-[28px] lg:w-[49px] border-none"
  duration={120}
  delay={30}
  defaultRadius={70}
  smallScreenRadius={35}
>
  <NodeJSIcon />
</OrbitingCircles>

{/* Outer Circles (reverse) */}
<OrbitingCircles
  className="h-[40px] w-[40px] lg:w-[56px] border-none"
  reverse // Dirección opuesta
  duration={120}
  delay={60}
  defaultRadius={140}
  smallScreenRadius={91}
>
  <PostgreSQLIcon />
</OrbitingCircles>

<OrbitingCircles
  className="h-[35px] w-[35px] lg:w-[56px] border-none bg-transparent"
  reverse
  duration={120}
  delay={90}
  defaultRadius={140}
  smallScreenRadius={91}
>
  <MySQLIcon />
</OrbitingCircles>

<OrbitingCircles
  className="h-[35px] w-[35px] lg:w-[63px] border-none"
  duration={120}
  delay={120}
  defaultRadius={210}
  smallScreenRadius={140}
>
  <JavaIcon />
</OrbitingCircles>

<OrbitingCircles
  className="h-[35px] w-[35px] lg:w-[63px] border-none"
  reverse
  duration={120}
  delay={150}
  defaultRadius={210}
  smallScreenRadius={140}
>
  <SpringIcon />
</OrbitingCircles>

<OrbitingCircles
  className="h-[35px] w-[35px] lg:w-[63px] border-none"
  reverse
  duration={120}
  delay={150}
  defaultRadius={210}
  smallScreenRadius={140}
>
  <JavaScriptIcon />
</OrbitingCircles>


    </div>
  );
}



export default OrbitingCirclesDemo;