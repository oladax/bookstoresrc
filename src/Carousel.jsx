import React from 'react';
import { Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from './Images/Techguru.jpg';
import img2 from './Images/marvey.jpeg';
import img3 from './Images/madu.jpg';
import img4 from './Images/Mimi.jpeg';
import img5 from './Images/sani.jpeg';
import img6 from './Images/Ade.jpeg';
import img7 from './Images/sammy.jpg';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { faQuoteLeftAlt, faQuoteRightAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Carousel.css';

function Carousel() {
  return (
    <div className="carousel-container" id="testimonials">
      <div className="testimonial-intro">
        <p>Testimonials</p>
        <h2>What people say about Oladax's skills</h2>
      </div>
      <Swiper
        modules={[Pagination, A11y, Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        pagination={{ clickable: true }}
        navigation={true} // Enable navigation arrows

        autoplay={{ delay: 9000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        className="swiper-container"

      >

  <SwiperSlide className="swiper-slide">
          <div className="slide-content">
              <div className="img-con">
              <img src={img1}/>
               <h3>Kolawole Joseph</h3>
              </div>
              <h4>Tech Guru</h4>
              <h4>Organization Manager</h4>
              <p className='stars'> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/>  <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></p>
            <p>
           <em className='left'> <FontAwesomeIcon icon={faQuoteLeftAlt} /></em> Oladax is a frontend developer who combines passion and dedication to create solutions that solve human problems. His enthusiasm is unwavering, and he always strives for excellence in his work. <em className='right'><FontAwesomeIcon icon={faQuoteRightAlt}/></em></p>
            <li>
              <a href="https://www.facebook.com/odunkola.joseph"><FontAwesomeIcon icon={faFacebook}/></a>
            </li>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="slide-content">
              <div className="img-con">
              <img src={img2}/>
               <h3>Marvellous Alemonu</h3>
              </div>
              <h4>Virtual Assistant</h4>
              <h4> Renaissance Virtual Assistants Agency</h4>
              <p className='stars'> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/>  <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></p>
            <p>
           <em className='left'> <FontAwesomeIcon icon={faQuoteLeftAlt} /></em> I'm a big fan of Oladax's websites, and I always look forward to seeing what new projects he comes up with. I've especially benefited from his sites "iwelewa" and "oladax-Chatgpt".

 <em className='right'><FontAwesomeIcon icon={faQuoteRightAlt} /></em>
            </p>
            <li>
              <a href="https://www.facebook.com/alemonu.marvy"><FontAwesomeIcon icon={faFacebook}/></a>
            </li>
          </div>
        </SwiperSlide>


        <SwiperSlide className="swiper-slide">
          <div className="slide-content">
              <div className="img-con">
              <img src={img3}/>
               <h3>Peter Madueke</h3>
              </div>
              <h4>Undergraduate</h4>
                <h4>Tech Enthusiast</h4>
              <p className='stars'> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/>  <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></p>
            <p>
              <em className='left'> <FontAwesomeIcon icon={faQuoteLeftAlt} /></em> 
            As a student, using oladax chatgpt and bookstore websites has made my studies less stressful. With the help of these tools, I'm able to learn faster and understand complex assignments more easily.
            <em className='right'><FontAwesomeIcon icon={faQuoteRightAlt} /></em>
 </p>
            <li>
              <a href="https://www.facebook.com/reigns.paul"><FontAwesomeIcon icon={faFacebook}/></a>
            </li>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="slide-content">
              <div className="img-con">
              <img src={img4}/>
               <h3>Mimi Marcus</h3>
              </div>
              <h4>Undergraduate</h4>
              <h4>Blockchain Writer</h4>
              <p className='stars'> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/>  <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></p>
           
            <p>
           <em className='left'> <FontAwesomeIcon icon={faQuoteLeftAlt} /></em>
           
           Such a resourceful programmer. His websites are user-friendly and well-designed, like the exemplary Iwelewa project, showcasing his knack for making complex tasks straightforward.
           
            <em className='right'><FontAwesomeIcon icon={faQuoteRightAlt} /></em>
            </p>
            <li>
              <a href="https://www.facebook.com/mimi.marcus.336"><FontAwesomeIcon icon={faFacebook}/></a>
            </li>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="slide-content">
              <div className="img-con">
              <img className='imgd' src={img5}/>
               <h3>Mustapha Sani</h3>
              </div>
              <h4>Cybersecurity Expert</h4>
              <h4>Programmer</h4>
              <p className='stars'> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/>  <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></p>
            <p>
           <em className='left'> <FontAwesomeIcon icon={faQuoteLeftAlt} /></em>

           Oladax is a dedicated frontend developer who wholeheartedly works on crafting solutions that enhance people's lives. His commitment to excellence is steadfast.
           Genius guy.
            <em className='right'><FontAwesomeIcon icon={faQuoteRightAlt} /></em>
          </p>
            <li>
              <a href=""><FontAwesomeIcon icon={faFacebook}/></a>
            </li>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="slide-content">
              <div className="img-con">
              <img className='imgd' src={img6}/>
               <h3>Adekunle Joshua </h3>
              </div>
              <h4>Undergraduate</h4>
              <h4>Programmer</h4>
              <p className='stars'> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/>  <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></p>
            <p>
           <em className='left'> <FontAwesomeIcon icon={faQuoteLeftAlt} /></em> Encountering Oladax has truly
            been a boon. As a fellow programmer, his readiness to share free
             learning materials and his eagerness to clarify complex concepts have been invaluable to me. <em className='right'><FontAwesomeIcon icon={faQuoteRightAlt} /></em>
            </p>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100009414395685"><FontAwesomeIcon icon={faFacebook}/></a>
            </li>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="slide-content">
              <div className="img-con">
              <img className='imgd' src={img7}/>
               <h3>Sammy Chucks</h3>
              </div>
              <h4>Philosopher</h4>
              <h4>Tech Savvy</h4>
              <p className='stars'> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/>  <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></p>
            <p>
           <em className='left'> <FontAwesomeIcon icon={faQuoteLeftAlt} /></em>Oladax's consistent progress in programming is evident through daily tech advancements, crafting impressive projects despite a busy schedule, showcasing his impactful capabilities. <em className='right'><FontAwesomeIcon icon={faQuoteRightAlt} /></em>
            </p>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100073726224694"><FontAwesomeIcon icon={faFacebook}/></a>
            </li>
          </div>
        </SwiperSlide>
              </Swiper>
    </div>
  );
}

export default Carousel;
