import React from 'react'
import './Hero.css'
import { useLanguage } from '../../context/LanguageContext'
import { HERO_TECH_ICONS, PROFILE } from '../../utils/data'

const TechIcon = ({ tech }) => (
  <div className="tech-icon" title={tech.name}>
    <img src={tech.icon} alt={tech.name} />
  </div>
)

function Hero() {
  const { t } = useLanguage()
  const [first, ...rest] = HERO_TECH_ICONS

  return (
    <section className="hero-container" id="seccionInicio">
      <div className="hero-content">
        <h1>{PROFILE.name}</h1>
        <h2>{t.hero.role}</h2>
        <p>{t.hero.summary}</p>

        <ul className="hero-facts">
          {t.hero.facts.map((fact) => (
            <li key={fact.icon}>
              <span className="material-icons" aria-hidden="true">{fact.icon}</span>
              {fact.text}
            </li>
          ))}
        </ul>

        <div className="hero-actions">
          <a className="btn btn-primary" href={PROFILE.cv} download>
            <span className="material-icons" aria-hidden="true">download</span>
            {t.ui.downloadCv}
          </a>
          <a className="btn btn-secondary" href="#seccionContacto">
            {t.ui.contactBtn}
          </a>
          <a className="hero-social" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="./assets/images/linkedin.png" alt="" className="icon-light" />
          </a>
          <a className="hero-social" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="./assets/images/github.png" alt="" className="icon-light" />
          </a>
        </div>
      </div>

      <div className="hero-img">
        <div>
          <TechIcon tech={first} />
          <img src={PROFILE.photo} alt={t.hero.photoAlt} className='bordeImagen'/>
        </div>
        <div>
          {rest.map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
