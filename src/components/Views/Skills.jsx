import React, { useState } from 'react'
import {iconData} from '../../data/icon'


export const Skills = () => {

 

  return (
    <div className="w-full h-full">


    <h2 className='text-arsenic p-4 text-5xl text-center mb-7'>Habilidades</h2>

    <div className='grid grid-cols-3 gap-14 px-32 w-full justify-items-center'>
      

      {iconData.map((Icon, index) => {
        
        return <div key={index} className="smd:h-28 smd:w-28 w-14 h-14 hover:scale-110">  <Icon/>  </div>
        
      })}


    </div>
      </div>
  )
}
