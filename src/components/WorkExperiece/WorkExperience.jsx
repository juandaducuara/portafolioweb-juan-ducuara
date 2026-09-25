import React from 'react'
import './WorkExperience.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import { useLanguage } from '../../context/LanguageContext'

const WorkExperience = () => {
  const { t } = useLanguage();

  return (
    <section className="section experience-container" id='seccionExperienciaLaboral'>
      <h2 className="section-heading">{t.experience.title}</h2>

      <ol className="timeline">
        {t.experience.items.map((item) => (
          <li className="timeline-item" key={item.company}>
            <span className={`timeline-dot ${item.current ? 'current' : ''}`} aria-hidden="true" />
            <ExperienceCard details={item} labels={t.ui} />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default WorkExperience
