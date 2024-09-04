import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div 
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}    
    >
      <div className="mobile-menu-container">
        <img src="./assets/images/Juan Ducuara.png" alt="Logo" className="logo" />
        <ul>
          <li>
            <a className="menu-item" href="#seccionInicio">Inicio</a>
          </li>
          <li>
            <a className="menu-item" href="#seccionHabilidades">Habilidades</a>
          </li>
          <li>
            <a className="menu-item" href="#seccionExperienciaLaboral">Experiencia laboral</a>
          </li>
          <li>
            <a className="menu-item" href="#seccionContacto">Contacto</a>
          </li>
          <li>
            <button className="contact-btn" onClick={() => { /* Lógica para el botón */ }}>
              Contactame
            </button>           
          </li>
        </ul>
      </div>    
    </div>
  );
}

export default MobileNav;
