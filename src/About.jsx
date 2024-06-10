import React from 'react';
import './About.css';
import './project.css';
import olada from "./Images/WhatsApp Image 2024-05-12 at 3.27.47 PM (1).jpeg";
import country from './Images/16.11.2022_15.51.09_REC-removebg-preview.png';
import password from './Images/oladax.github.io_Password-Generator_-removebg-preview.png';
import africook from './Images/oladax.github.io_Africook_.png';
import calculator from './Images/oladax.github.io_Talking-Age-calculator_-removebg-preview.png';
import bookstore from './Images/oladax.github.io_Iwelewa_.png';
import currency from './Images/oladax.github.io_Currency-Converter-_-removebg-preview.png'
import musicplayer from './Images/oladax.github.io_Music-Player___3_-removebg-preview.png';
import Car from './Images/oladax.github.io_Innoson-Showorld_.png'
import Chatgpt from './Images/kinoladax.png'
import Dictionary from './Images/oladax.github.io_Dictionary_.png'
import linktube from './Images/oladax.github.io_Linktube_ (1).png';
import todo from './Images/oladax.github.io_A-todolist-application-_-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle,} from '@fortawesome/free-solid-svg-icons'; // Fix the import here
import { faAppStoreIos, faCss3, faHtml5, faJs, faReact,  } from '@fortawesome/free-brands-svg-icons';



function About() {

  const abouts = document.querySelector('.abouts')
  const pros = document.querySelector('.pro')

  const pro = () => {
   if(abouts.style.display = "block"){
    abouts.style.display = "none"
    pros.style.display = "flex"
   }


   if (pros) {
    const offset = 100; // Adjust this value to control the offset from the middle
    const middlePosition = pros.offsetTop - offset;
    window.scrollTo({ top: middlePosition, behavior: 'smooth' });
  }
  }

  const about = () => {
  if(pros.style.display = "flex"){
    pros.style.display = "none"
    abouts.style.display = "block"
  }

  if (abouts) {
    const offset = 100; // Adjust this value to control the offset from the middle
    const middlePosition = abouts.offsetTop - offset;
    window.scrollTo({ top: middlePosition, behavior: 'smooth' });
  }
   }

  
   

   

  return (
    <div className="aboutcon" id='about'>
      <div className="abouts" >
        <div id='btn' className="about-intro">
          <p> About</p>
          <h2>Developing comprehensive frontend solutions, not just visuals</h2>
        </div>
        <div className="about">
          <div className="oladaxpic">
            <div className="bottom"></div>
            <h3>Hello, clients and friends,</h3>
            <div className="olami">
              <img src={olada} alt="Oladax" className='ola' />
              <p><span className="circle-icon">
                <FontAwesomeIcon icon={faCircle} />
              </span>ladax</p>
            </div>
            
          </div>
         
          <div className="aboutsentence" >
            <p>My full name is Olamide Daniel Banjo, professionally known as <span className="highlight">Oladax</span>. 
            I'm thrilled to share a bit about myself and the digital experiences I create.
            
              Over the years, I've dedicated myself to mastering the art of web development,
               focusing on <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, <span className="highlight">Git</span>, <span className="highlight">Github</span>, <span className="highlight">Figma</span>, <span className="highlight">Sass</span>,            <span className="highlight">JavaScript</span>, and <span className="highlight">React.js</span>. This journey of self-learning has allowed me to build captivating websites that cater to the needs of the general public.
            
          </p>
             <p> Collaborating with other talented developers has not only expanded my skills but also allowed me to fix complex coding issues with ease. Moreover, I take great pride in being a reliable resource for my friends, assisting them in overcoming their website challenges.
               </p>
            <p>
              Being resourceful is one of my strengths, and I'm always on the lookout for the latest and most efficient ways to tackle coding problems. My adept googling skills, combined with the efficient use of <span className="highlight">Stackoverflow</span>, set me apart. Whether it's through online tutorials, documentation, or the vast coding community, I'm continually seeking the right resources to enhance my skills.
            </p>
            <p id='pro'>
              With every project, my focus is on creating visually stunning and user-friendly experiences that leave a lasting impression. Each challenge becomes an opportunity for me to grow creatively and refine my expertise.
            
              I'm thrilled to offer my web development services, and I look forward to collaborating with you to bring your digital visions to life. Let's embark on this exciting journey together and craft remarkable digital experiences that make a difference.
            </p>
            <div className="probutton" >
              <button onClick={pro} >Projects</button>
            </div>
          </div>
        </div>
      </div>

      {/* Project session */}
      <div className="pro" >
        <div className="pro-intro">
          <p>Projects</p>
          <h2>Personal Project Perfection: Elevating Frontend Realities</h2>
        </div>
        <div className="project">
          <div className="procontainer">
           

             {/* Similar code for other projects */}
             <div className="pros">
              <div className='divs'>
                <img src={bookstore} />
              </div>
              <h3>Bookstore</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                <li><FontAwesomeIcon icon={faReact}/></li>
                <li><FontAwesomeIcon icon={faAppStoreIos} /></li>

                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/Iwelewa/"> Live Preview </a>
                </div>
              </div>
            </div>

             {/* Similar code for other projects */}
             <div className="pros">
              <div className='divs'>
                <img src={linktube} />
              </div>
              <h3>Streaming</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                <li><FontAwesomeIcon icon={faReact}/></li>
                <li><FontAwesomeIcon icon={faAppStoreIos} /></li>

                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/Linktube/"> Live Preview </a>
                </div>
              </div>
            </div>


            <div className="pros">
              <div className='divs'>
                <img src={africook} />
              </div>
              <h3>Food Recipe</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                    <li><FontAwesomeIcon icon={faReact}/></li>
                    <li><FontAwesomeIcon icon={faAppStoreIos} /></li>

                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/Africook/"> Live Preview </a>
                </div>
              </div>
            </div>
            {/* Similar code for other projects */}
            <div className="pros">
              <div className='divs'>
                <img src={country} />
              </div>
              <h3>Country Guide</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                    <li><FontAwesomeIcon icon={faHtml5} /></li>
                    <li><FontAwesomeIcon icon={faCss3} /></li>
                    <li><FontAwesomeIcon icon={faJs} /></li>
                    <li><FontAwesomeIcon icon={faAppStoreIos} /></li>
                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/Country-Guide/"> Live Preview </a>
                </div>
              </div>
            </div>

             {/* Similar code for other projects */}
             <div className="pros">
              <div className='divs'>
                <img src={password} />
              </div>
              <h3>Password Generator</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                    <li><FontAwesomeIcon icon={faHtml5} /></li>
                    <li><FontAwesomeIcon icon={faCss3} /></li>
                    <li><FontAwesomeIcon icon={faJs} /></li>
                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/Password-Generator/"> Live Preview </a>
                </div>
              </div>
            </div>
            

             {/* Similar code for other projects */}
             <div className="pros">
              <div className='divs'>
                <img src={musicplayer} />
              </div>
              <h3>Music Player</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                <li><FontAwesomeIcon icon={faReact}/></li>

                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/Music-Player/"> Live Preview </a>
                </div>
              </div>
            </div>

             {/* Similar code for other projects */}
             <div className="pros">
              <div className='divs'>
                <img src={calculator} />
              </div>
              <h3>Age Calculator</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                    <li><FontAwesomeIcon icon={faHtml5} /></li>
                    <li><FontAwesomeIcon icon={faCss3} /></li>
                    <li><FontAwesomeIcon icon={faJs} /></li>
                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/Talking-Age-calculator/"> Live Preview </a>
                </div>
              </div>
            </div>

             {/* Similar code for other projects */}
             <div className="pros">
              <div className='divs'>
                <img src={currency} />
              </div>
              <h3>Currency Converter</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                    <li><FontAwesomeIcon icon={faHtml5} /></li>
                    <li><FontAwesomeIcon icon={faCss3} /></li>
                    <li><FontAwesomeIcon icon={faJs} /></li>
                    <li><FontAwesomeIcon icon={faAppStoreIos} /></li>
                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/Currency-Converter-/"> Live Preview </a>
                </div>
              </div>
            </div>

             {/* Similar code for other projects */}
             <div className="pros">
              <div className='divs'>
                <img src={todo} />
              </div>
              <h3>Todo-List</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                    <li><FontAwesomeIcon icon={faHtml5} /></li>
                    <li><FontAwesomeIcon icon={faCss3} /></li>
                    <li><FontAwesomeIcon icon={faJs} /></li>
                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/A-todolist-application-/"> Live Preview </a></div> </div>
             </div>


             {/* Similar code for other projects */}
             <div className="pros">
              <div className='divs'>
                <img src={Dictionary} />
              </div>
              <h3>Dictionary</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                    <li><FontAwesomeIcon icon={faHtml5} /></li>
                    <li><FontAwesomeIcon icon={faCss3} /></li>
                    <li><FontAwesomeIcon icon={faJs} /></li>
                    <li><FontAwesomeIcon icon={faAppStoreIos}/></li>
                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/Dictionary/"> Live Preview </a></div> </div>
             </div>


             {/* Similar code for other projects */}
             <div className="pros">
              <div className='divs'>
                <img src={Car} />
              </div>
              <h3>Innoson Vehicles</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                    <li><FontAwesomeIcon icon={faHtml5} /></li>
                    <li><FontAwesomeIcon icon={faCss3} /></li>
                    <li><FontAwesomeIcon icon={faJs} /></li>
                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/Innoson-Showorld/"> Live Preview </a></div> </div>
             </div>

             
             {/* Similar code for other projects */}
             <div className="pros">
              <div className='divs'>
                <img src={Chatgpt} />
              </div>
              <h3>Oladax Chatgpt</h3>
              <h4>Techonologies used:</h4>
              <div className="techs">
                <div className='techcollection'>
                    <li><FontAwesomeIcon icon={faHtml5} /></li>
                    <li><FontAwesomeIcon icon={faCss3} /></li>
                    <li><FontAwesomeIcon icon={faJs} /></li>
                    <li><FontAwesomeIcon icon={faAppStoreIos} /></li>
                </div>
                <div className="hires">
                  <a href="https://oladax.github.io/oladax-chatgpt/"> Live Preview </a></div> </div>
             </div>

          </div>
          <div className="abtbutton">
                  <button onClick={about}>About</button>
                  <button><a href="https://github.com/oladax">view more</a></button>
                </div>
        </div>
      </div>
    </div>
  );
}

export default About;
