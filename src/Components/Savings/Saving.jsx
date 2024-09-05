import React from 'react'
import "./Saving.css"
import { NavLink } from 'react-router-dom'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
const Saving = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className='savings-container'>
       <div className="savins-img-container" data-aos="fade-right">
        <img src="/images/e-c-1.png" alt="" />
       </div>
       <div
    
       className="saving-content" data-aos="zoom-in-down" data-aos-easing="ease-in-out">
        <span 
       
        className='new-arivl'>Top Offers On New Arrivals</span>
        <span
    
         className='saving-content'>Explore our fantastic offers on new arrivals! Enjoy exclusive discounts and special deals on the latest mobile and laptop bags. Be among the first to get your hands on the most stylish and high-quality products at unbeatable prices. Don’t miss out!</span>
        <div
       
        >
        <NavLink to='/offer'> <button className='Button'> Shop Now
        </button> </NavLink>
        </div>
       </div>
    </div>
  )
}

export default Saving
