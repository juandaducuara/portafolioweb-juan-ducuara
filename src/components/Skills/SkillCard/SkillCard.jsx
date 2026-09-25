import React from 'react'
import './SkillCard.css'

const SkillCard = ({title,iconUrl,items}) => {
  return (
    <article className="skill-card">
        <div className="skill-card-header">
            <div className="skill-icon">
                <img src={iconUrl} alt=""/>
            </div>
            <h3>{title}</h3>
        </div>
        <ul className="chip-list">
            {items.map((item)=>(
                <li key={item.name} className={`chip ${item.core ? "core" : ""}`}>
                    {item.name}
                </li>
            ))}
        </ul>
    </article>
  )
}

export default SkillCard
