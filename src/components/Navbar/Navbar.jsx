import React,{useState} from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu,setOpenMenu] = useState(false);

  const toggleMenu=()=>{
    setOpenMenu(!openMenu);
  };
  
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src="./assets/images/Juan Ducuara.png" alt="" className="logo" />
          <ul>
            <li>
              <a className="menu-item" href="#seccionInicio">Inicio</a>
            </li>
            <li>
              <a className="menu-item" href="#seccionHabilidades">Habilidades</a>
            </li>
            <li>
              <a className="menu-item" href="#seccionEstudiosRealizados">Estudios realizados</a>
            </li>
            <li>
              <a className="menu-item" href="#seccionExperienciaLaboral">Experiencia laboral</a>
            </li>
            <li>
              <a className="menu-item" href="#seccionContacto">Contacto</a>
            </li>
            
            <button className="contact-btn" onClick={() => { }}>
              Contactame
            </button>           
          </ul>
          <button class="menu-btn" onClick={toggleMenu}>
              <span 
              class="material-icons" 
              style={{ fontSize: "1.8rem" }}
              >
                {openMenu ? "close":"menu"}
              </span>
            </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
