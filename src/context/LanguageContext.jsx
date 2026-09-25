import React, { createContext, useContext, useEffect, useState } from 'react'
import { CONTENT } from '../utils/data'

const STORAGE_KEY = 'lang'

const LanguageContext = createContext(null)

const getInitialLang = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && CONTENT[stored]) return stored
  } catch {
    // localStorage puede no estar disponible (modo privado, etc.)
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // sin persistencia, el idioma se mantiene solo en esta visita
    }
  }, [lang])

  const toggleLang = () => setLang((current) => (current === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: CONTENT[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
