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

    // <article className={estilos.card}>
    //  <div className={estilos.cardContainer}>
    //  <img src={props.img} />
    //  </div>
    //   <div>
    //     <h2 className='text-gray-900'>{props.title}</h2>
    //     <div className='flex justify-center md:justify-start'>
          
    //     {props.icon.map((iconName, index) => {      
    //     const IconComponent = iconComponents[iconName];
    //     return <div  key={index} className='w-7 h-7 rounded-full mr-1'>  {IconComponent ? <IconComponent  /> : null} </div>
        
    //   })}
    //    </div>
    //     <p className='h-14 md:h-20'>
    //       {props.description}
    //     </p>
    //     <div className='flex gap-4 justify-center lg:justify-normal'>
    //       {props.href &&
    //        <a target='_blank' href={props.href} rel='noreferrer'>{props.buttontxt}</a> 
    //       }
       
    //     {props.github && 
    //     <a target='_blank' href={props.href2} rel='noreferrer' className='flex items-center w-14'><GithubIcon/> </a>}
    //     </div>
    //   </div>
    // </article>

<article className="max-w-sm rounded overflow-hidden shadow-white shadow-sm border-white">
<img className="w-full aspect-video" src={props.img} alt="Sunset in the mountains" />
<div className="px-6 py-4">
  <div className="font-bold text-xl mb-2">{props.title}</div>
  <div className='flex justify-center md:justify-start py-2'>
          
              {props.icon.map((iconName, index) => {      
             const IconComponent = iconComponents[iconName];
              return <div  key={index} className='w-7 h-7 rounded-full mr-2'>  {IconComponent ? <IconComponent  /> : null} </div>
              
            })}
             </div>
  <p className="text-gray-400 text-base h-20">
    {props.description}
  </p>
</div>
<div className="flex gap-2 justify-center lg:justify-normal px-6 pb-2 pt-3">
  {props.href &&
 
    <a target='_blank' href={props.href} rel='noreferrer' className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{props.buttontxt}</a>
  }
  {props.github &&
     <a target='_blank' href={props.href2} rel='noreferrer' className='flex items-start w-7 hover:scale-105 duration-300'><GithubIcon/> </a>
  }
</div>
</article>

  )
}


