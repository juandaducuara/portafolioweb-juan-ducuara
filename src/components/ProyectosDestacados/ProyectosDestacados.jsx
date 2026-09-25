import React from 'react'
import './ProyectosDestacados.css'
import CaseStudy from './CaseStudy/CaseStudy'
import ProyectoCard from './ProyectoCard/ProyectoCard'
import { useLanguage } from '../../context/LanguageContext'

const ProyectosDestacados = () => {
  const { t } = useLanguage();

  return (
    <section className="section proyectos-container" id='seccionProyectos'>
      <h2 className="section-heading">{t.projects.title}</h2>
      <CaseStudy data={t.projects.caseStudy} />
      <ProyectoCard details={t.projects.others} />
    </section>
  )
}

export default ProyectosDestacados
