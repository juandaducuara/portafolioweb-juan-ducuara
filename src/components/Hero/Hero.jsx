import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div>
      <section className="hero-container" id="seccionInicio">
        <div className="hero-content">
            <h2>Desarrollador Full Stack</h2>
            <p>
            C# (.NET) | PHP (Laravel, CodeIgniter) | Java (Spring Boot) | React | Vue | SQL Server | MySQL | Oracle
            </p>
        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/java.png" alt=""/>
                </div>
                <img src="./assets/images/FOTO PARADO LINDA.jpg" alt="" className='bordeImagen'/>
            </div>
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/csharp.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/js.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/php.png" alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
