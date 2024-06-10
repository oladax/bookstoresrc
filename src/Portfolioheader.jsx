import React, { useState, useEffect, useRef } from 'react';
import king from './Images/kingola-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faTimes, faBars, faCircle, faHome, faPhone, faInfoCircle, faProjectDiagram, faComments, faTools} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faWhatsapp,  faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
//import Oladax from './Images/WhatsApp Image 2023-09-06 at 7.20.49 AM.jpeg'
import Serv from './Serv';
import About from './About';
import video from '../src/vidoe/VID-20230825-WA0005.mp4'
import Contact from './Contact';
import Carousel from './Carousel.jsx';
import Footer from './Footer';

const Oladax = "https://drive.google.com/file/d/1Cst0WFAw0Eq1V2hIANLS9ywvhdMaBfl9/view?usp=drivesdk"

function Portfolioheader() {


  const resume = (cv) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = cv;
    downloadLink.download = 'Oladax Resume';
    downloadLink.click();
  }
 
  const [Sun, setSun] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add isMenuOpen state
  const menu = document.querySelector('.menu');
  const menua = document.querySelectorAll('.menu a');
  const slide = document.querySelectorAll('.slide-content');

  const body = document.querySelector('body');
  const footer = document.querySelector('.footer');
  const carou = document.querySelector('.carousel-container');
  const h1 = document.querySelector('.h1');
  const service1 = document.querySelectorAll('.first-set .service1');
  const service2 = document.querySelectorAll('.first-set .service2');
  const footer_section = document.querySelectorAll('.footer-section p a');
  const footer_icons = document.querySelectorAll('.social-icons a');
  const example = document.querySelectorAll('.example');

  const service3 = document.querySelectorAll('.first-set .service3');
  const service = document.querySelectorAll('.service-intro p');
  const aboutintro = document.querySelectorAll('.about-intro h2');
  const names = document.querySelectorAll('.name input');
  const textarea = document.querySelectorAll('.message textarea');
  const email = document.querySelectorAll('.email input');
 const prointro = document.querySelectorAll('.pro-intro h2');
 const testimonial_intro = document.querySelectorAll('.testimonial-intro h2');

 const highlight = document.querySelectorAll('.highlight');

 const contactintro = document.querySelectorAll('.contact-intro h2');
  const olami = document.querySelectorAll('.olami img');
  const sun = document.querySelectorAll('.toggle button');
  const homepage = useRef(null);
  const h2 = document.querySelector('h2');
  const dd = document.querySelector('dd');
  const pros = document.querySelectorAll('.pros');
  const header= document.querySelector('header');
  const aboutcon = document.querySelector('.aboutcon');
  const anchorTags = document.querySelectorAll('nav a');
  const hire = document.querySelectorAll('.hires a');
  const intro = document.querySelectorAll('.social-media-icons a');
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const Pref = useRef(true);
  const Paref = useRef(true)
  const watch = useRef(null);
  const Pararef = useRef(true);


   // Function to handle the click event
   const handleWatchIntro = () => {
    window.open(video, '_blank'); // Open the video URL in a new tab
  };

  const Darkmode = () => {
    menua.forEach((moon) => moon.classList.toggle('darkmode'));

    setSun(!Sun);
    aboutcon.classList.toggle('darkmode');
    aboutintro.forEach((about) => about.classList.toggle('darkmode'));
    prointro.forEach((pro) => pro.classList.toggle('darkmode'));
    contactintro.forEach((pro) => pro.classList.toggle('darkmode'));
    sun.forEach((moon) => moon.classList.toggle('darkmode'));
    footer_icons.forEach((moon) => moon.classList.toggle('darkmode'));
    footer_section.forEach((moon) => moon.classList.toggle('darkmode'));
    highlight.forEach((moon) => moon.classList.toggle('darkmode'));
    olami.forEach((ola) => ola.classList.toggle('darkmode'))
    testimonial_intro.forEach((ola) => ola.classList.toggle('darkmode'))

    body.classList.toggle('darkmode');
    footer.classList.toggle('darkmode');
    h1.classList.toggle('darkmode');
    h2.classList.toggle('darkmode');
    menu.classList.toggle('darkmode')
    dd.classList.toggle('darkmode');
    pros.forEach((pro) => pro.classList.toggle('darkmode'));
    names.forEach((name) => name.classList.toggle('darkmode'));
    textarea.forEach((name) => name.classList.toggle('darkmode'));
    email.forEach((email) => email.classList.toggle('darkmode'));
    hire.forEach((hire) => hire.classList.toggle('darkmode'));
    service1.forEach((serve) =>serve.classList.toggle('dark') );
    service2.forEach((servi) =>servi.classList.toggle('dark') );
    service3.forEach((servic) =>servic.classList.toggle('dark') );
    service.forEach((p) => p.classList.toggle('darkmode'));
    example.forEach((servic) =>servic.classList.toggle('dark') );
    header.classList.toggle('darkmode');
    carou.classList.toggle('darkmode');
    slide.forEach( (slide) =>     slide.classList.toggle('darkmode')); 
    homepage.current.classList.toggle('dark');
    intro.forEach((a) => a.classList.toggle('darkmode'));
    anchorTags.forEach((map) => map.classList.toggle('darkmode'));
    handleToggle();
    const para = Pref.current;
    const paras = Paref.current;
    const pararef = Pararef.current;

    para.classList.toggle('darkmode');
    paras.classList.toggle('darkmode');
    const watch_intro = watch.current;
    pararef.classList.toggle('darkmode');

    watch_intro.classList.toggle('darkmode');
  };

  
   const linked = () => {
    menu.classList.toggle('menud')
    setIsMenuOpen(!isMenuOpen);

   }
    

  const triggermenu = () => {


    setIsMenuOpen(!isMenuOpen);
    menu.classList.toggle('menud')

   
  };



  const [text, setText] = useState('');
  const message = "Hello! I'm Oladax,\nA Frontend Engineer \nAnd Content Writer.";

  useEffect(() => {
    const typeText = (currentIndex) => {
      if (currentIndex >= message.length) return;
      setText(message.slice(0, currentIndex + 1));
      const delay = 200;
      setTimeout(() => {
        typeText(currentIndex + 1);
      }, delay);
    };

    

    typeText(0);
  }, []);

  

  return (
    <div className="project-con">
      <div className="header-main" ref={homepage}>
     
        <header>
          <div className="logo">
            <span className="circle-icon">
              <FontAwesomeIcon icon={faCircle} />
            </span>
            <h1>ladax</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#servicehome">Services</a></li>
              <li><a href="#pro">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </nav>
          <button className="hire">
            <a href="contact"> Hire Me <span className="forward">&raquo;</span></a>
          </button>
          <div className="dropdown">
            <button onClick={triggermenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </header>
        <div className="menu">

          <div className="menu-div">
          <ol>
              <li><a onClick={linked} href="#"><em> <FontAwesomeIcon icon={faHome}/></em> Home</a>
              <span></span>
              </li>
              <li><a  onClick={linked} href="#about"><em> <FontAwesomeIcon icon={faInfoCircle} /> </em> About</a>
              <span></span>
              </li>
              <li><a  onClick={linked} href="#servicehome"><em><FontAwesomeIcon icon={faTools} /></em> Services</a>
              <span></span>
              </li>
              <li><a  onClick={linked} href="#pro"><em> <FontAwesomeIcon icon={faProjectDiagram} /></em> Projects</a>
              <span></span>
              </li>
              <li><a  onClick={linked} href="#contact"><em> <FontAwesomeIcon icon={faPhone}/></em> Contact</a>
              <span></span>
              </li>
              <li><a  onClick={linked} href="#testimonials"><em><FontAwesomeIcon icon={faComments} /></em> Testimonials</a>
              <span></span>
              </li>
            </ol>

            <button  onClick={linked} className="hires">
            <a href='https://api.whatsapp.com/message/MQX3O3MI2UR4L1?autoload=1&app_absent=0'> Hire Me <span className="forward">&raquo;</span></a>
          </button>

    
          </div>
         
            </div>
        <div className="toggle">
          <button onClick={Darkmode}>
            <FontAwesomeIcon icon={Sun ? faSun : faMoon} />
          </button>
        </div>
        <div className="section-con">
          <section>
            <div className="intro-con">
              <h1 className="h1">{text}</h1>
              <p ref={Pref}>
              I leverage a combination of technical expertise and creativity to design captivating digital experiences.
              </p>
              <p ref={Pararef}>
              I also generate content that caters to both technical and non-technical audiences, serving clients and organizations on a global scale.
              </p>
              <p ref={Paref}>Feel free to reach out to me for your projects.
                </p>
              <div className="cv-con">
              <button onClick={() => resume(Oladax)}>Resume</button>
                <button className="play" onClick={handleWatchIntro}>
    <FontAwesomeIcon icon={faPlay} />
    </button>
              </div>
            </div>
            <div className="oladax-pic">
              <img src={king}  />
              <div>
                <div className="empty"></div>
              </div>
              <div className="social-media-icons">
              <a href='https://web.facebook.com/olamide.daniel.581/?_rdc=1&_rdr' className="social-media-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href=" https://twitter.com/Oladdev?t=gZ6qzm535SSF5tQt-yS7ow&s=08">
                  <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
                </a>
            <a href='https://github.com/oladax' className="social-media-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/in/olamide-daniel-812039243' className="social-media-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://api.whatsapp.com/message/MQX3O3MI2UR4L1?autoload=1&app_absent=0' className="social-media-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
               
              </div>
            </div>
           
          </section>
        </div>
       
      </div>
      <Serv />
      <About/>
      <Contact/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default Portfolioheader;
