import React from 'react'
import "./Why.css"
import { whydata } from './Whydata'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const Why = () => {
    useEffect(() => {
      AOS.init({
        duration: 1200, // Customize animation duration
        once: false, // Whether animation should happen only once
      });
    }, []);
  
  return (
    <div className='why-container'>
        <h1
        
         className='why-h1' data-aos="zoom-in" data-aos-easing="ease-in-out">Why Choose Us</h1>

      <div
  
      
      className="why-card-container">
        {
     whydata.map((itam,i)=>(
        <div
         className="why-card" key={i} data-aos="flip-left">
            <span className='why-icon'>{itam.icon}</span>
            <span className='why-name'>{itam.name}</span>
            <span className='why-detail'>{itam.detail}</span>
        </div>
     ))
        }
      </div>
    </div>
  )
}

export default Why
