
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Herosection/Hero'
import Offers from './Components/Oferrs/Offers'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import ContactUs from './Components/ContactUS\'/ContactUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  const [cart, setcart] = useState([])

  return (
    <>
       
       
       <Router>
       <Navbar/>
      <Routes>
        <Route path="/cart" element={<Cart cart={cart} setcart={setcart} />} />
        <Route path="/" element={ <Hero cart={cart} setcart={setcart}/> } />
        <Route path="/offer" element={ <Offers cart={cart} setcart={setcart}/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/contact' element={ <ContactUs/>}/>
      </Routes>
      <div className='footor'>
      <Footer/>
      </div>
    </Router>

    </>
  )
}

export default App
