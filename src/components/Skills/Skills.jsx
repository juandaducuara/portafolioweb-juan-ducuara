import React from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import { useLanguage } from '../../context/LanguageContext'

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="section skills-container" id="seccionHabilidades">
      <div className="skills-header">
        <h2 className="section-heading">{t.skills.title}</h2>
        <p className="skills-legend">
          <span className="legend-swatch" aria-hidden="true" />
          {t.skills.legend}
        </p>
      </div>
      <div className="skills-grid">
        {t.skills.categories.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            iconUrl={category.icon}
            items={category.items}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
