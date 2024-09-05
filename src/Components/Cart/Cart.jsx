import React from 'react'
import "./Cart.css"
import { NavLink } from 'react-router-dom'
const Cart = ({cart,setcart}) => {
    {console.log(cart)}
  return (
    <div>

        <h1 className={`${cart.length==0 ? 'cart-ht':'cart-h'}`}>Cards in Cart</h1>
      <div className={` ${cart.length==0 ? '' : 'offers-cars-containerss'}`}>
        <div className={`${cart.length==0 ?'':'offer-data-card-container'}`}>
            
                
            
            {
                cart.length == 0 ?(
  <>
    <h2 className='cart-h2'>Your Cart Is Empty</h2>
    
    <div className='cart-btnss'>
    <NavLink to='/'><button className='cart-btn'>Continue Shoping</button></NavLink>
    </div>
  </>
                ):
                cart.map((product,i)=>(
                    <div className="item-card" key={i}>
                        
                        <img src={product.imgSrc} alt="" />
                        <span className='item-tittle'>{product.title}</span>
                        <span className='item-description'>{product.description}</span>
                        <span className='btns-offers-container'>
                            <span className='item-price-offers'>{product.price}</span>
                        </span>
                    </div>
                ))
            }
        </div>
        </div>
        <div className={`${cart.length==0 ? 'clearss-btn':'clears-btn'}`}>
            <button onClick={()=>setcart('')} className='clear-btn'>Clear Carts</button>
        </div>
    </div>
  )
}

export default Cart
