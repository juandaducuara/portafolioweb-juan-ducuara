import React, { useRef } from 'react'
import './EstudiosRealizados.css'
import { ESTUDIOS_REALIZADOS } from '../../utils/data'
import Slider from 'react-slick'
import EstudiosCard from './EstudiosCard/EstudiosCard'

const EstudiosRealizados = () => {
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
      <section className="experience-container" id='seccionEstudiosRealizados'>
        <h5>Estudios realizados</h5>

        <div className="experience-content">
            <div className="arrow-right" onClick={slideRight}>
                <span className="material-icons">chevron_right</span>
            </div>
        </div>

        <div className="experience-content">
            <div className="arrow-left" onClick={slideLeft}>
                <span className="material-icons">chevron_left</span>
            </div>
        </div>

        <div className="experience-content">
            <Slider ref={sliderRef}{...settings}>
            {ESTUDIOS_REALIZADOS.map((item)=>(
                <EstudiosCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
      </section>
    </div>
  )
}

export default EstudiosRealizados
