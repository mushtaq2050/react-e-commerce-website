import React from 'react'
import "./Footer.css"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
    <div className='footer-container'>
     <div className="footer-logo-container">
     <span className='e-commerce-2'>CarryTech</span>
      <span className='footer-lorem'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum, suscipit corrupti nulla consequuntur blanditiis illum eius accusantium quaerat facere natus reprehenderit voluptas .</span>
      <div className="logos-container">
        <span className='logo-1'>
        <a href="https://www.linkedin.com/in/mushtaq-ul-hassan-8865872b0/" target='_blank' >
        <FaLinkedinIn/>
        </a>
        </span>
        <span className='logo-1'>
          <a href="https://www.facebook.com/profile.php?id=61552415504214" target='_blank'>
        <FaFacebookF />
        </a>
        </span>
        <span className='logo-1'>
        <FaTwitter />
        </span>
      </div>
     </div>
     <div className="grid-contaiber">
      <div className="grid-1">
        <span className='grid-heading'>Permalinks</span>
        <span className='grid-text'>About</span>
        <span className='grid-text'>Plans</span>
        <span className='grid-text'>Shops</span>
        <span className='grid-text'>Blog</span>
        <span className='grid-text'>Contact</span>
      </div>
      <div className="grid-1">
        <span className='grid-heading'>Insight</span>
        <span className='grid-text'>Blog</span>
        <span className='grid-text'>Case studies</span>
        <span className='grid-text'>Events</span>
        <span className='grid-text'>Communities</span>
        <span className='grid-text'>FAQs</span>
      </div>
      <div className="grid-1">
        <span className='grid-heading'>Get In Toch</span>
        <span className='grid-text'>Contact Us</span>
        <span className='grid-text'>Suppour</span>
      </div>
     </div>
    </div>
    <hr className='footer-hr' />
    <div className='footer-copy-right'>
      <span className='reserves' >design and created by mushtaq ul hassan</span>
    </div>
    </div>
  )
}

export default Footer
