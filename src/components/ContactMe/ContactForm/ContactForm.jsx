import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div>
      <div className="contact-form-content">
        <form action="" method="post">
            <div className="name-container">
                <input type='text' name='firstname' placeholder='Nombres'/>
                <input type="text" name='firstname' placeholder='Apellidos'/>
            </div>
            
            <input type="text" name="email" placeholder='Correo electronico'/>
            <textarea type="text" name='message' placeholder='Introduce tu mensaje' rows={3}/>
            <button>ENVIAR</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
