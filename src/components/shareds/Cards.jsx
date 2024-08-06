import React from 'react'
import estilos from './card.module.css';
import { NodeJSIcon, JavaScriptIcon, ReactJsIcon, MySQLIcon, PostgreSQLIcon, JQueryIcon, GithubIcon } from '../Icons';


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
     <div className={estilos.cardContainer}>
     <img src={props.img} />
     </div>
      <div>
        <h2 className='text-gray-900'>{props.title}</h2>
        <div className='flex justify-center md:justify-start'>
          
        {props.icon.map((iconName, index) => {      
        const IconComponent = iconComponents[iconName];
        return <div  key={index} className='w-7 h-7 rounded-full mr-1'>  {IconComponent ? <IconComponent  /> : null} </div>
        
      })}
       </div>
        <p className='h-14 md:h-20'>
          {props.description}
        </p>
        <div className='flex gap-4 justify-center lg:justify-normal'>
          {props.href &&
           <a target='_blank' href={props.href} rel='noreferrer'>{props.buttontxt}</a> 
          }
       
        {props.github && 
        <a target='_blank' href={props.href2} rel='noreferrer' className='flex items-center w-14'><GithubIcon/> </a>}
        </div>
      </div>
    </div>

  )
}


