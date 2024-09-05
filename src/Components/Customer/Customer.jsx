import React from 'react'
import "./Customer.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { sliderSetting } from './SliderSetting';
import { sliderproduct } from './Sliderdatas';
import { FaStar } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


const Customer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);
  // const transition={type:'spring',duration:3}
  return (
    <div className='container'>
      <div
       className="customer-container">
         <h2
    
          className='client-h2' data-aos="zoom-in-down" data-aos-easing="ease-in-out">What Our Cllients Say</h2>

        <Swiper
        
        className='my-swiper'
         slidesPerView={2}
        spaceBetween={30}
       slidesPerGroup={1}
        loop={true}
        {...sliderSetting}
        >

            {
                sliderproduct.map((card,i)=>(
                    <SwiperSlide>
                        <div className='swipar-slider' data-aos="flip-up" key={i}>
                        <div className="img-star-container">
                        <div className="img-container">
                          <img src={card.img} alt="" className='slider-img' />
                        </div>
                        <div className="name-star-container">
                            <span className='slider-name'>{card.name}</span>
                              <span className="star-container">
                              <FaStar/> 
                              <FaStar/> 
                              <FaStar/> 
                              <FaStar/> 
                              <FaStar/> 
                              </span>
                        </div>
                        </div>
                        <p className='slider-detail'>{card.detail}</p>
                        </div>
                    </SwiperSlide>
                ))
            }

        </Swiper>
        
      </div>
    </div>
  )
}

export default Customer
