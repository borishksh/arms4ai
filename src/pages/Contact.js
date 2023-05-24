import React from 'react'
import {FaAt,FaBuilding,FaLinkedin,FaTwitter,FaFacebook} from 'react-icons/fa'

export default function Contact() {
  return (
    <div className='container'>
      <div className='contact-hero'>
        <div className='contact-left'>
          <h1>
            Connect with us and join our mission
          </h1>
          <div  className='contact-email'>
            <FaAt className="email-icon" />
            <h3>
              Email
            </h3>
          </div>
          <p>
            info@arms4ai.com
          </p>
          <div>
          <FaBuilding className="office-icon" />
          <h3>
          Office Address:
          </h3>
          </div>
          <p>
          Lake works, Hauz Khas
          </p>
          <div className='social'>
            <FaLinkedin className="linkedin-icon" />
            <FaTwitter className="twitter-icon" />
            <FaFacebook className="facebook-icon" />
          </div>
        </div>
        <div className='contact-right'>
          <div className='contact-form-row'>
            <label>First name</label>
            <label>Last name</label>
            <input/>
            <input/>
          </div>
          <div className='contact-form-row'>
            <label class='contact-label-email'>Email</label>
            <input/>
          </div>
          <div className='contact-form-row'>
            <label>Organisation</label>
            <label>Industry</label>
            <input/>
            <input/>
          </div>
          <div className='contact-form-row'>
            <label className='contact-label-message'>Message</label>
            <input/>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}
