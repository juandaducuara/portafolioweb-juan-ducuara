import React from "react";
import "./MobileNav.css";

const MobileNav = ({isOpen,toggleMenu}) => {
  return (
    <>
    <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}    
    >
        <div className="mobile-menu-container">
            <img src="./assets/images/Juan Ducuara.png" alt="" className="logo" />
            <ul>
            <li>
              <a className="menu-item">Inicio</a>
            </li>
            <li>
              <a className="menu-item">Habilidades</a>
            </li>
            <li>
              <a className="menu-item">Experiencia laboral</a>
            </li>
            <li>
              <a className="menu-item">Contacto</a>
            </li>
            <button className="contact-btn" onClick={() => { }}>
              Contactame
            </button>           
          </ul>
        </div>    
    </div>
    </>
  )
}

export default MobileNav
