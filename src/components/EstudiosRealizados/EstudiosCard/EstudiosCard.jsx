import React from 'react'
import './EstudiosCard.css'

const EstudiosCard = ({details}) => {
  return (
    <div className="estudios-card">
        <h6>{details.title}</h6>
        <div className="estudios-duration">{details.date}</div>
        {details.responsabilities && details.responsabilities.length > 0 && (
            <ul>
                {details.responsabilities.map((item)=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default EstudiosCard
