import React from 'react';
import "./About.css"
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
          <div className="bg-about-container">
          <div className="about-bg-img-container">
            <img src="/images/hero1.png" alt="" />
           </div>
           <div
           
           className="bg-about-text-container">
                <span
                
                 className='about-bg-us typewriter'>About Us</span>
                <span 
                
                className='about-bg-text'>CarryTeach offers premium, stylish mobile and laptop  designed for modern professionals. Our focus is on quality, comfort, and functionality, ensuring you carry your tech in style and security.</span>
                <div
               
                >
                   < NavLink to='/offer'> <button className='Button-1'> Shop Now
                   </button> </NavLink>
                </div>
           </div>
          </div>
      <section
       className="mission mission-1">
        <div
         className="text-content">
        <h2
       
         className='misshion-h'  data-aos="zoom-in" data-aos-easing="ease-in-out">Our Mission</h2>
        <div 
        
        className='btn-p'>
        <p className='mission-p'  data-aos="zoom-in" data-aos-easing="ease-in-out">We are dedicated to providing high-quality bags that blend functionality with style. Our mission is to offer products that cater to your unique needs while maintaining a commitment to sustainability and innovation.</p>
        <div>
        < NavLink to='/contact'>  
<button class="button type1" data-aos="zoom-in" data-aos-easing="ease-in-out">
  <span class="btn-txt">Contact Us</span>
</button>
  </NavLink>
        </div>
        </div>
        </div>
        <div className="png-mission"  data-aos="fade-left">
            <img src="/images/about5.png" alt="" />
        </div>
      </section>


      <section className="mission mission-2">
      <div className="png-mission" data-aos="fade-right" data-aos-easing="ease-in-out">
            <img src="/images/about7.png" alt="" />
        </div>
        <div 
       
        className="text-content">
        <h2
        
         className='misshion-h' data-aos="zoom-in" data-aos-easing="ease-in-out">Our Journey</h2>
        <div

         className='btn-p'>
        <p className='mission-p' data-aos="zoom-in" data-aos-easing="ease-in-out">At CarryTech, our journey began with a passion for crafting exceptional bags that merge practicality with elegance. We are committed to delivering products that not only meet your individual needs but also align with our core values of sustainability and cutting-edge design. As we continue to evolve, our mission remains steadfast: to offer you high-quality bags that enhance your lifestyle while embracing innovation and environmental responsibility.</p>
        <div>
        <NavLink to='/offer'>  <button class="button type1" data-aos="zoom-in" data-aos-easing="ease-in-out">
  <span class="btn-txt">Explore us</span>
</button></NavLink>
        </div>
        </div>
        </div>
      </section>
     </div>
  );
};

export default About;
