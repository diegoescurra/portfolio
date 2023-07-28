import React from 'react'
import estilos from './card.module.css';


export const Cards = () => {
  return (
   
   

    <div className={estilos.card}>
      <img src="/Hills.png" />
      <div>
        <h2>Invest in Valby's sparkling new construction</h2>
        <h3>Type: Residential rental</h3>
        <p>
          Soon you can invest in Sid Harman's new attractive property, set in
          the heart of Athens.
        </p>
        <button>Show the property project</button>
      </div>
    </div>

  )
}

  
  