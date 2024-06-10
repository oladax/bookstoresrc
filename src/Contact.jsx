import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import svg from './Images/undraw_team_spirit_re_yl1v.svg'
//import {faLinkedin, faFacebook, faWhatsapp, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  const [text, setText] = useState('Send Message');

  //pop
  const container = document.querySelector('.pop');

  const popout = () => {
    container.classList.remove('zoom-in');
    setText("Send Message")

  }


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name field
    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email field
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email address';
    }

    // Validate message field
    if (!message.trim()) {
      errors.message = 'Message is required';

    }

    
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      sendEmail();
    } else {
      setErrors(formErrors);
    }
  };

  const sendEmail = () => {
    const serviceID = 'service_uf9lhaz';
    const templateID = 'template_15uicz8';
    const userID = 'pr6ImLwlWeomB8shk';
    setText("Sending")

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        //alert('Email sent successfully!');

        container.classList.add('zoom-in');
        setFormData({
          name: '',
          email: '',
          message: '',
        
        });
        setErrors({});
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email');
      });
  };

  

  return (
    <div className="contact" id='contact'>
       <div className='contact-intro'>
         <p>Contact</p>
         <h2>Got a question or proposal, or just want to say hello? Go ahead</h2>
         <h2></h2>
        </div>
        

      <div className="contact-container">
        <div className="svg">
    
          <img src={svg}/>
        </div>
        <div className="form-container">
          <h3>Send me a direct message!</h3>
          <div className="pop">
        <div class="pop-con">
          <li><FontAwesomeIcon icon={faCheckCircle} /></li>
                 <div class="message"><h3>Thank You!</h3>
                 <p>Your message has been sent successfully!</p></div>
                 <button onClick={popout}>Ok</button>
               </div>
        </div>

        <form onSubmit={handleSubmit}>

          {/*/ 
          sent pop up/*/}
       <div className="center">
       <div className="pop">
        <div class="pop-con">
          <li><FontAwesomeIcon icon={faCheckCircle} /></li>
                 <div class="message"><h3>Thank You!</h3>
                 <p>Your message has been sent successfully!</p></div>
                 <button onClick={popout}>Ok</button>
               </div>
        </div>
       </div>

      <div className='name'>
        <label htmlFor="name">What's your name?</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}          
          onChange={handleChange}
          placeholder='Olamide Daniel'
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div className='email'>
        <label htmlFor="email">What's your email?</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='oladax@protonmail.com'
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div className='message'>
        <label htmlFor="message">How can I help?</label>
        <textarea
          id="message"
          name="message"
          placeholder='Start your message'
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span>{errors.message}</span>}
      </div>

   <div className="butdiv">
   <button type="submit">{text}</button>
   <span>or</span>
   <button><a href="mailto:danielolamide141@gmail.com">Send Mail</a></button>
   </div>
    </form>
        </div>

      </div>
   </div>

    
  );
}

export default Contact;
