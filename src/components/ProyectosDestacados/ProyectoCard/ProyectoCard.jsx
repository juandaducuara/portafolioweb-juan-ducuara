import React from 'react'
import './ProyectoCard.css'

const ProyectoCard = ({ project, featuredLabel }) => {
  return (
    <article className={`proyecto-card${project.featured ? ' featured' : ''}`}>
        {project.featured && (
          <span className="proyecto-badge">
            <span className="material-icons" aria-hidden="true">star</span>
            {featuredLabel}
          </span>
        )}
        <h4>{project.title}</h4>
        <p className="proyecto-description">{project.description}</p>
        <ul className="chip-list">
            {project.stack.map((tech) => (
                <li key={tech} className={`chip${project.featured ? ' core' : ''}`}>{tech}</li>
            ))}
        </ul>
    </article>
  )
}

export default ProyectoCard
