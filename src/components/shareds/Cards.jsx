import React from 'react'
import estilos from './card.module.css';
import { NodeJSIcon, JavaScriptIcon, ReactJsIcon, MySQLIcon, PostgreSQLIcon, JQueryIcon } from '../Icons';


export const Cards = ( props ) => {

  const iconComponents = {
  
    NodeJSIcon,
    JavaScriptIcon,
    JQueryIcon,
    ReactJsIcon,
    MySQLIcon,
    PostgreSQLIcon
    
  };

  return (

    <div className={estilos.card}>
      <img src={props.img} />
      <div>
        <h2>{props.title}</h2>
        <div className='flex justify-center md:justify-start'>
          
        {props.icon.map((iconName, index) => {      
        const IconComponent = iconComponents[iconName];
        return <div  key={index} className='w-7 h-7 rounded-full mr-1'>  {IconComponent ? <IconComponent  /> : null} </div>
        
      })}
       </div>
        <p>
          {props.description}
        </p>
        <div className='flex gap-4 justify-center lg:justify-normal'>
        <a target='_blank' href={props.href} rel='noreferrer'>{props.buttontxt}</a>
        {props.href2 && <a target='_blank' href={props.href2} rel='noreferrer'>{props.buttontxt2}</a>}
        </div>
      </div>
    </div>

  )
}


