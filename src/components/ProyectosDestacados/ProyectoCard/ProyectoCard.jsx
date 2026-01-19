import React from 'react'
import './ProyectoCard.css'

const ProyectoCard = ({details}) => {
  return (
    <div className="proyecto-card">
        <h6>{details.title}</h6>
        <p className="proyecto-description">{details.description}</p>
    </div>
  )
}

export default ProyectoCard
