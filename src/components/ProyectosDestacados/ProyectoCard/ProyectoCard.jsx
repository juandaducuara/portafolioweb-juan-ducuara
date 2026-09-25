import React from 'react'
import './ProyectoCard.css'

const ProyectoCard = ({details}) => {
  return (
    <article className="proyecto-card">
        <h3>{details.title}</h3>
        <p className="proyecto-description">{details.description}</p>
        <ul>
            {details.items.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </article>
  )
}

export default ProyectoCard
