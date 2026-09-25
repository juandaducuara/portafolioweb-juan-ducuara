import React from 'react'
import './EstudiosCard.css'

const EstudiosCard = ({details}) => {
  return (
    <div className="estudios-card">
        <h3>{details.title}</h3>
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
