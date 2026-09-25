import React from 'react'
import './Footer.css'
import { useLanguage } from '../../context/LanguageContext'
import { PROFILE } from '../../utils/data'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      © {new Date().getFullYear()} <span>{PROFILE.name}</span> - {t.footer}
    </footer>
  )
}

export default Footer
