import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import { useLanguage } from '../../context/LanguageContext'
import { PROFILE } from '../../utils/data'

const ContactMe = () => {
  const { t } = useLanguage();

  return (
    <section className="section contact-container" id="seccionContacto">
        <h2 className="section-heading">{t.contact.title}</h2>
        <p className="contact-subtitle">{t.contact.subtitle}</p>
        <div className="contact-content">
            <ContactInfoCard
                href={`mailto:${PROFILE.email}`}
                iconUrl="./assets/images/gmail.png"
                label={t.contact.email}
                value={PROFILE.email}
            />
            <ContactInfoCard
                href={PROFILE.linkedin}
                iconUrl="./assets/images/linkedin.png"
                label={t.contact.linkedin}
                value="in/juandaducuara"
                external
                lightIcon
            />
            <ContactInfoCard
                href={PROFILE.github}
                iconUrl="./assets/images/github.png"
                label={t.contact.github}
                value="juandaducuara"
                external
                lightIcon
            />
            <ContactInfoCard
                href={PROFILE.cv}
                materialIcon="download"
                label={t.contact.cv}
                value={t.contact.cvValue}
                download
            />
        </div>
    </section>
  )
}

export default ContactMe
