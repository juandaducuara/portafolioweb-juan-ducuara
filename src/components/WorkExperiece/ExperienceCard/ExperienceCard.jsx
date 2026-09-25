import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({details, labels}) => {
  return (
    <article className="work-experience-card">
        <header className="work-header">
            <div>
                <h3>{details.role}</h3>
                <p className="work-company">{details.company} · {details.location}</p>
            </div>
            <div className="work-meta">
                {details.current && <span className="work-current">{labels.current}</span>}
                <span className="work-duration">{details.date}</span>
            </div>
        </header>

        <h4>{labels.highlights}</h4>
        <ul className="work-highlights">
            {details.highlights.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>

        {details.responsabilities.length > 0 && (
            <details className="work-details">
                <summary>{labels.showAllTasks}</summary>
                <ul>
                    {details.responsabilities.map((item)=>(
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </details>
        )}

        <ul className="chip-list work-stack">
            {details.stack.map((tech)=>(
                <li className="chip" key={tech}>{tech}</li>
            ))}
        </ul>
    </article>
  )
}

export default ExperienceCard
