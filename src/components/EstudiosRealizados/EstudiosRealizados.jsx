import React from 'react'
import './EstudiosRealizados.css'
import EstudiosCard from './EstudiosCard/EstudiosCard'
import { useLanguage } from '../../context/LanguageContext'

const EstudiosRealizados = () => {
  const { t } = useLanguage();

  return (
    <section className="section estudios-container" id='seccionEstudiosRealizados'>
      <h2 className="section-heading">{t.education.title}</h2>
      <div className="estudios-grid">
        {t.education.items.map((item)=>(
          <EstudiosCard key={item.title} details={item}/>
        ))}
      </div>
    </section>
  )
}

export default EstudiosRealizados
