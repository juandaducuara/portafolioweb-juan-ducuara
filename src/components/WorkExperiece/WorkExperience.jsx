import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'

const WorkExperience = () => {
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
      <section className="experience-container" id='seccionExperienciaLaboral'>
        <h5>Experiencia laboral</h5>

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
            {WORK_EXPERIENCE.map((item)=>(
                <ExperienceCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
      </section>
    </div>
  )
}

export default WorkExperience
