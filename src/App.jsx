import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Footer from './components/footer/Footer'
import LoginPopupe from './components/LoginPopupe/LoginPopupe'


export default function App() {

  const  [showLogin, setShowLogin] = useState(false)

  return (
    <>

    {showLogin ? <LoginPopupe setShowLogin={setShowLogin} /> : <></>}
      <div className='App'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='placeOrder'  element={<PlaceOrder />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}



