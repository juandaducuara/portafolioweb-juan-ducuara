import React from 'react'
import './ProyectosDestacados.css'
import CaseStudy from './CaseStudy/CaseStudy'
import ProyectoCard from './ProyectoCard/ProyectoCard'
import { useLanguage } from '../../context/LanguageContext'

const ProyectosDestacados = () => {
  const { t } = useLanguage();
  const others = t.projects.others;

  return (
    <section className="section proyectos-container" id='seccionProyectos'>
      <h2 className="section-heading">{t.projects.title}</h2>
      <CaseStudy data={t.projects.caseStudy} />

      <div className="proyectos-otros">
        <h3>{others.title}</h3>
        <p className="proyectos-otros-description">{others.description}</p>
        <div className="proyectos-grid">
          {others.items.map((project) => (
            <ProyectoCard key={project.title} project={project} featuredLabel={t.ui.featured} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProyectosDestacados
