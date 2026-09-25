import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import EstudiosRealizados from './components/EstudiosRealizados/EstudiosRealizados'
import WorkExperience from './components/WorkExperiece/WorkExperience'
import ProyectosDestacados from './components/ProyectosDestacados/ProyectosDestacados'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
const App = () =>{
  return(
    <>
    <Navbar/>
    <main className="container">
      <Hero/>
      <WorkExperience/>
      <ProyectosDestacados/>
      <Skills/>
      <EstudiosRealizados/>
      <ContactMe/>
    </main>
    <Footer/>
    </>
  )

}

export default App
