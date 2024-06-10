import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faCode, faDesktop, faFileAlt, faGlobe, faPalette, faPen, faPencilRuler, faRocket } from '@fortawesome/free-solid-svg-icons';

function Serv() {

  return (
    <div className='service-con'>
      <div className='ser-main'>
        <div id='servicehome' className="service-div">
          <div className="service-intro">
          <p >Services</p>
            <h2>Expertise Service! Let's Dive In</h2>
            <dd >I offer expertise services that deliver exceptional results. Let's collaborate to bring your vision to life</dd>
          </div>
          <div className="service-container">
            <div className="first-set">
              <div className="service1">
                <li><FontAwesomeIcon icon={faDesktop} /></li>
                <h3>Responsive Web Design</h3>
                <p>I create websites that adapt and provide an optimal viewing experience across various devices and screen sizes.</p>
                <p className='example'>Example: "Crafting visually appealing and responsive websites that seamlessly adapt to any device, ensuring a consistent user experience."</p>
              </div>

              <div className="service1">
                <li><FontAwesomeIcon icon={faFileAlt} /></li>
                <h3>Copywriting</h3>
                <p>I employ compelling words to captivate, connect, and convert. I turn ideas into irresistible stories.</p>
                <p className='example'>Example: "I use words to make people want things – like products or ideas – by telling engaging stories."</p>
              </div>

              <div className="service1">
                <li><FontAwesomeIcon icon={faCode} /></li>
                <h3>Frontend Development</h3>
                <p> I also develop high-quality frontend code using modern web technologies (HTML, CSS, JavaScript or Reactjs) to bring designs to life and deliver seamless user experiences.</p>
                <p className='example'>Example: "Building robust and performant frontend solutions, translating design concepts into clean and scalable code for exceptional user experiences."</p>
              </div>

              <div className="service2">
                <li><FontAwesomeIcon icon={faGlobe} /></li>
                <h3>Cross-Browser Compatibility</h3>
                <p>I ensure that websites and web applications are compatible and function consistently across different web browsers and platforms.</p>
                <p className='example' >Example: "Ensuring cross-browser compatibility to guarantee that your website functions flawlessly across popular web browsers, delivering a consistent experience for all users."</p>
              </div>

              <div className="service2">
                <li><FontAwesomeIcon icon={faPen} /></li>
                <h3>Content Creation</h3>
                <p>Shaping narratives for social media and websites that leave a lasting digital impression. I can write your stories online.</p>
                <p className='example'>Example: "I write cool stuff for social media and websites that make people notice and remember you. Let's make your online world awesome!"</p>
              </div>

              <div className="service2">
                <li><FontAwesomeIcon icon={faRocket} /></li>
                <h3>Performance Optimization</h3>
                <p>Optimize website performance through efficient coding practices, image optimization, caching, and other techniques to improve loading speed and overall performance.</p>
                <p className='example'>Example: "Streamlining website performance with optimization strategies for lightning-fast load times, better user satisfaction, and improved search engine rankings."</p>
              </div>

              <div className="service3">
                <li><FontAwesomeIcon icon={faPalette} /></li>
                <h3>User Interface (UI) Design</h3>
                <p>Design intuitive and visually appealing user interfaces that enhance user interactions and improve overall user experience.</p>
                <p className='example'>Example: "Designing elegant and user-friendly interfaces that captivate users, improve usability, and drive engagement."</p>
              </div>

              <div className="service3">
                <li><FontAwesomeIcon icon={faPencilRuler} /></li>
                <h3>Canva Designs</h3>
                <p>Canva wizard crafting resumes, flyers, business proposals, presentations, and more. Designing your vision, pixel by pixel.</p>
                <p className='example'>Example: "Using Canva's magic to create stunning designs – from resumes to eye-popping flyers. Let's make your visuals stand out!"</p>
              </div>

              <div className="service3">
                <li><FontAwesomeIcon icon={faClone} /></li>
                <h3>Cloning Existing Websites</h3>
                <p>Replicate and recreate existing websites, preserving their design, functionality, and user experience.</p>
                <p className='example' >Example: "Recreating the design and functionality of popular websites to achieve a similar user experience and functionality."</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Serv;
