import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  return (
    <div className='navbar-container'>
      <div className="logo-container">
     <span className='e-commerce'>CarryTech</span>
      </div>
      <div className={`menu-container ${toggle ? 'actave' : ''}`}>
      <IoIosClose onClick={()=>settoggle(!toggle)} className='close-men' />
        <ul className='menu-containers-a'>
            <NavLink onClick={()=>settoggle(!toggle)} className={({ isActive }) => (isActive ? 'active' : '')} to="/">Home</NavLink >
            <NavLink onClick={()=>settoggle(!toggle)} className={({ isActive }) => (isActive ? 'active' : '')} to="/about">About</NavLink>
            <NavLink onClick={()=>settoggle(!toggle)} className={({ isActive }) => (isActive ? 'active' : '')} to="/offer">Offers</NavLink>
            <NavLink onClick={()=>settoggle(!toggle)} className={({ isActive }) => (isActive ? 'active' : '')} to="contact">Contact</NavLink>
    
            { isAuthenticated ? (
              
                <button className='log-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log out
              </button>
              
              ):(
               < button className='log-btn' onClick={() => loginWithRedirect()}>Log In</button>
              )
            }

  

            </ul>
      </div>
      <CiMenuFries onClick={()=>settoggle(!toggle)} className='open-men'/>
    </div>
  )
}

export default Navbar
