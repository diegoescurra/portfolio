import React from 'react'
import estilos from './card.module.css';


export const Cards = (props) => {
  return (
   
   

    <div className={estilos.card}>
      <img src={props.img} />
      <div>
        <h2>{props.title}</h2>
        <p>
          {props.description}
        </p>
        <a target='_blank' href={props.href}>{props.buttontxt}</a>
      </div>
    </div>

  )
}

  
  