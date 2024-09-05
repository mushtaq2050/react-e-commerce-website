import React from 'react'
import "./Hero.css"
import Why from '../WhyUs/Why'
import { motion } from 'framer-motion'
import Saving from '../Savings/Saving'
import Footer from '../Footer/Footer'
import Customer from '../Customer/Customer'
import { NavLink } from 'react-router-dom'
import CountUp from 'react-countup';
const Hero = ({cart,setcart}) => {
  const fadeInUpAnimationVariants = {
    hidden :{
    opacity:0,
    y:'8rem'
    },
    show: {
      opacity:1,
      y:0,
      transition :{
        staggerChildren:0.3,
        duration:1,
      }
    },
  };
  return (
    <>
    <div className='hero-bg'>
    <div className='container'>
      <div className='hero-container'>
   <motion.div
   initial='hidden'
   animate='show'
   variants={fadeInUpAnimationVariants}
    className="hero-text">
    <span className='welcome-hero typewriter'>
        Welcome To Our CarryTech  Shop
    </span>
    <motion.div
    variants={fadeInUpAnimationVariants}
     className='hero-p-text-hero-btn'>
    <motion.span
    variants={fadeInUpAnimationVariants}
     className='hero-p-text'>
    CarryTech offers stylish and durable bags designed to protect your mobile devices and laptops.
     Elevate your tech-carrying experience with our top-quality, functional solutions for on-the-go professionals.
    </motion.span>
    <motion.div
    variants={fadeInUpAnimationVariants}
    className='hero-btnss'
    >

    <NavLink to='/contact'> <button class="btn"> Get Started
    </button></NavLink>
    </motion.div>
    </motion.div>
   </motion.div>

   <div
   className="hero-img">
  <img src="/images/hero1.png" alt="" />
   </div>



<div className="views-stats-containers">
<div className="viewsstats">
            <span className='count'>
            <CountUp start={8841} end={9000} duration={4} />
            <span className='plus'>+</span>
            </span>
            <span className='product'>Premium Product</span>
          </div>
          <div className="viewsstats">
            <span className='count'>
            <CountUp start={1965} end={2000} duration={4} />
            <span className='plus'>+</span>
            </span>
            <span className='product'>Happy Customer</span>
          </div>
          <div className="viewsstats">
            <span className='count'>
            <CountUp start={12} end={28} duration={4} />
            <span className='plus'>+</span>
            </span>
            <span className='product'>Award Winning</span>
          </div>
</div>



      </div>
    </div>
    </div>
    <div className='whyy'>
    <Why/>
    </div>
     <div className="SAVINGS">
   < Saving/>
   </div>
   <Customer/>
    </>
  )
}

export default Hero
