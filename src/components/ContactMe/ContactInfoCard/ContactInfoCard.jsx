import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({href,iconUrl,materialIcon,label,value,external,download,lightIcon}) => {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a className="contact-details-card" href={href} download={download} {...linkProps}>
        <div className="icon">
            {materialIcon
              ? <span className="material-icons" aria-hidden="true">{materialIcon}</span>
              : <img src={iconUrl} alt="" className={lightIcon ? "icon-light" : undefined} />}
        </div>
        <span className="contact-label">{label}</span>
        <span className="contact-value">{value}</span>
    </a>
  )
}

export default ContactInfoCard
