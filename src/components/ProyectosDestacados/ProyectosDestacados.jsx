import React, { useRef } from 'react'
import './ProyectosDestacados.css'
import { PROYECTOS_DESTACADOS } from '../../utils/data'
import ProyectoCard from './ProyectoCard/ProyectoCard'
import Slider from 'react-slick'

const ProyectosDestacados = () => {
    const sliderRef = useRef();
    const settings={
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    };
    const slideRight=()=>{
        sliderRef.current.slickNext();
    };
    const slideLeft=()=>{
        sliderRef.current.slickPrev();
    }
  return (
    <div>
      <section className="proyectos-container" id='seccionProyectos'>
        <h5>Proyectos Destacados</h5>

        <div className="proyectos-content">
            <div className="arrow-right" onClick={slideRight}>
                <span className="material-icons">chevron_right</span>
            </div>
        </div>

        <div className="proyectos-content">
            <div className="arrow-left" onClick={slideLeft}>
                <span className="material-icons">chevron_left</span>
            </div>
        </div>

        <div className="proyectos-content">
            <Slider ref={sliderRef}{...settings}>
            {PROYECTOS_DESTACADOS.map((item)=>(
                <ProyectoCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
      </section>
    </div>
  )
}

export default ProyectosDestacados
