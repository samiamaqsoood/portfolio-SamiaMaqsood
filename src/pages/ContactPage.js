import React from 'react'
import '../App.css'
import '../components/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faPhone } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  return (
    <div className='page7'>
      <div className='contact-heading'>
        <h1>CONTACT</h1>
      </div>
      <div className='info-box'>
        <div className='email-phone'>
          <div>
            <h4>Email </h4>
            <a href='mailto : samiamaqsoood@email.com'><FontAwesomeIcon icon={faEnvelope} /> samiamaqsoood@email.com'</a>
          </div>
          <div>
            <h4>Phone </h4>
            <a href="tel:+923177404013" className="phone-link"><FontAwesomeIcon icon={faPhone} /> 
  +92 317 7404013
</a>
</div>

        </div>
        <div className='social'>
          <h4>Social</h4>
            <a href='https://github.com/samiamaqsoood'> GitHub <FontAwesomeIcon icon={faSquareUpRight} style={{color: "#ffffff",}} /></a> <br/>
            <hr style={{ border: "none", height: "2px", backgroundColor: "white", width: "100%", marginBottom:"5px" }} />

            <a href= 'https://www.linkedin.com/in/samia-maqsood-a30b6b358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> LinkedIn <FontAwesomeIcon icon={faSquareUpRight} style={{color: "#ffffff",}} /></a> <br/>
            <hr style={{ border: "none", height: "2px", backgroundColor: "white", width: "100%", marginBottom:"5px" }} />

            <a href= 'https://instagram.com/samiamaqsood_'> Instagram <FontAwesomeIcon icon={faSquareUpRight} style={{color: "#ffffff",}} /> </a>
            <hr style={{ border: "none", height: "2px", backgroundColor: "white", width: "100%", marginBottom:"5px" }} />


        </div>
        <div className='design-develop'>
            <span>Desinged and Develop by <span>Samia Maqsood</span></span>
            <p>© {new Date().getFullYear()} Samia Maqsood. All rights reserved.</p>
        </div>




      </div>
    </div>
  )
}
