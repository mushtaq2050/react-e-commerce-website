import React from 'react'
import "./Offers.css"
import { FaShoppingCart } from "react-icons/fa";
import { offersdata } from './Offerdata';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';



const Offers = ({cart,setcart}) => {
    const navigate = useNavigate()
    const [searchitem, setsearchitem] = useState('')
    const [originaldata, setoriginaldata] = useState(offersdata)
    const [offerdata, setofferdata] = useState(offersdata)
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();

  

    const filtereddata =(type)=>{
       const filtereddata=originaldata.filter((item)=>item.category === type)
       setofferdata(filtereddata)
    }

    const filteredvalues = (value) =>{
      const filterval=originaldata.filter((item)=>item.price >= value)
      console.log(filterval)
      setofferdata(filterval)
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
     const filterdsearch = originaldata.filter((item)=>item.category.toLocaleLowerCase().includes(searchitem.toLocaleLowerCase()));
     console.log(filterdsearch)
     setofferdata(filterdsearch)
     setsearchitem('')
    }

    const addtocart = (id,price,title, description,imgSrc) =>{
        if(isAuthenticated){
             const obj = {
            id,
            price,
            description,
            title,
            imgSrc
         }
         setcart([...cart, obj])
         console.log(cart)
         toast.success('🦄 Your Item is Added', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
        else{
           alert("Please Login First")
        }
        
    }

    const FedeInUpAnimationVariants = {
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
      
      
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>

<ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
className='toast'
/>
<div className='bg-offers'>

    
    <motion.div 
    initial='hidden'
    whileInView='show'
    variants={FedeInUpAnimationVariants}
    className="bg-offer-text">
        <motion.span
        variants={FedeInUpAnimationVariants}
         className='sale-off'>Sale 20% Off <br />
        On Everything</motion.span>
        <motion.span 
        variants={FedeInUpAnimationVariants}
        className='offers-t-bg'>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, 
            veniam, vel architecto veritatis delectus repellat modi impedit sequi.</motion.span>
        <motion.div
        variants={FedeInUpAnimationVariants}
        >
            <button className='ennjoy-btn-ee'>Enjoy it</button>
        </motion.div>
    </motion.div>
    <div className="bg-offer-img">
        <img src="/images/offer.png.png" alt="" />
    </div>

</div>
       <div className="offers-container">
        <div data-aos="flip-up">
        <div className="offers-top-section-1">
            <span className='ee-comerce'>
                E-Commerce
            </span>
            <form  onSubmit={handlesubmit}>
            <input type="text"
            value={searchitem} 
            onChange={(e)=>setsearchitem(e.target.value)}
            placeholder='Search'
             className='input-search-offer'
              />
            </form>
            <NavLink to = "/cart">
            <span className='one-1-cart'>
            <span className='one-1'>{cart.length}</span>
            <span className='carts'>
                <FaShoppingCart/>
                </span>
                </span>
                </NavLink>
        </div>
        <div className="offers-top-section-2">
            <span  className='filter'>Filter by</span>
            <span onClick={()=>setofferdata(originaldata)} className='filter'>All</span>
            <span onClick={()=>filtereddata('mobiles')} className='filter'>Mobiles</span>
            <span onClick={()=>filtereddata('laptops')} className='filter'>Laptops</span>
            <span onClick={()=>filtereddata('tablets')} className='filter'>Tablets</span>
            <span onClick={()=>filteredvalues('29999')} className='filter'>>=29999</span>
            <span onClick={()=>filteredvalues('49999')}  className='filter'>>=49999</span>
            <span onClick={()=>filteredvalues('69999')}  className='filter'>>=69999</span>
            <span onClick={()=>filteredvalues('89999')}  className='filter'>>=89999</span>

        </div>
        </div>
<div className="offers-cars-containerss">
    {console.log(offerdata)}
        <div className="offer-data-card-containerse">
            {
                offerdata.map((item,i)=>(
                    
                    <div className="item-card" key={i} data-aos="zoom-in" data-aos-easing="ease-in-out">
                        <img src={item.imgSrc} alt="" />
                        <span className='item-tittle'>{item.title}</span>
                        <span className='item-description'>{item.description}</span>
                        <span className='btns-offers-container'>
                            <span className='item-price-offers'>{item.price}</span>
                                <button 
                                onClick={()=>addtocart(item.id,item.price,item.title,item.description,item.imgSrc)}
                                
                                className='button2'> <span>Add to cart</span></button>
                        </span>
                    </div>
                ))
            }
        </div>
        </div> 
        </div>
        </>
  )
}

export default Offers
