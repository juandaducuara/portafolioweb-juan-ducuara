import React,{useState} from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import { useLanguage } from '../../context/LanguageContext';
import { PROFILE } from '../../utils/data';

const Navbar = () => {
  const [openMenu,setOpenMenu] = useState(false);
  const { t, toggleLang } = useLanguage();

  const toggleMenu=()=>{
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

      <nav className="nav-wrapper">
        <div className="nav-content">
          <a href="#seccionInicio" aria-label={PROFILE.name}>
            <img src="./assets/images/Juan Ducuara.png" alt={PROFILE.name} className="logo" />
          </a>
          <ul>
            {t.nav.map((item) => (
              <li key={item.href}>
                <a className="menu-item" href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a className="contact-btn" href="#seccionContacto">
                {t.ui.contactBtn}
              </a>
            </li>
          </ul>
          <div className="nav-actions">
            <button
              className="lang-btn"
              onClick={toggleLang}
              aria-label={t.ui.langToggleLabel}
              title={t.ui.langToggleLabel}
            >
              {t.ui.langToggle}
            </button>
            <button className="menu-btn" onClick={toggleMenu} aria-label={t.ui.menuLabel}>
              <span
              className="material-icons"
              style={{ fontSize: "1.8rem" }}
              >
                {openMenu ? "close":"menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
