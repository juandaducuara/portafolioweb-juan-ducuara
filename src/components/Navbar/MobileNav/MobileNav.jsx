import React from "react";
import "./MobileNav.css";
import { useLanguage } from "../../../context/LanguageContext";
import { PROFILE } from "../../../utils/data";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const { t } = useLanguage();

  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <img src="./assets/images/Juan Ducuara.png" alt={PROFILE.name} className="logo" />
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
      </div>
    </div>
  );
}

export default MobileNav;
