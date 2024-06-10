import React from 'react'
import './Footer.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf, faGlobe, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub,  faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {

 let link = "https://drive.google.com/file/d/12k4Szn6S1FdRWbmvRV8jt3wX1T6QR9rF/view?usp=drivesdk"

 return (
    <div>
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <em><FontAwesomeIcon icon={faMapMarkerAlt} /></em>
          <p>12 Timolthy Street, Lagos, Nigeria</p>
        </div>
        <div className="footer-section">
          <em><FontAwesomeIcon icon={faPhone}/></em>
          <p><a href="tell:+2349063327021">+2349063327021</a></p>
        </div>
        <div className="footer-section">
          <em><FontAwesomeIcon icon={faEnvelope} /></em>
          <p><a href="mailto:danielolamide141@gmail.com"> Danielolamide141@gmail.com</a>
         
          </p>
        </div>
        
        <div className="footer-section">
          <em><FontAwesomeIcon icon={faFilePdf} /></em>
          <p><a href={link}>Portfolio pdf</a></p>
        </div>
        
        <div className="footer-section">
          <em><FontAwesomeIcon icon={faGlobe} /></em>
          <p>English</p>
        </div>

        <div className=" footer-section social-icons">
        <a href='https://web.facebook.com/olamide.daniel.581/?_rdc=1&_rdr' className="social-media-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='https://www.linkedin.com/in/olamide-daniel-812039243' className="social-media-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/oladax' className="social-media-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href=" https://twitter.com/Oladdev?t=gZ6qzm535SSF5tQt-yS7ow&s=08">
                  <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
                </a>
            <a href='https://api.whatsapp.com/message/MQX3O3MI2UR4L1?autoload=1&app_absent=0' className="social-media-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
           
        </div>
      </div>
    </footer>
    <div className="copyright">
        <p>&copy; 2024 Oladax. All rights reserved.</p>
      </div>

     
    </div>
  )
}

export default Footer
