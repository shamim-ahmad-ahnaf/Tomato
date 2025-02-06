import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.png'
import basket from '../../assets/basket_icon.png'
import { Link } from 'react-router-dom'


export default function Navbar({ setShowLogin }) {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
           <Link to="/"><img src={logo} alt="" className='navbar-logo' /></Link>
            <ul className='nav-menu'>
                <Link to="/" onClick={() => setMenu("home")} className={menu==="home" ? "active" : ""}>Home</Link>
                <a href='#explore-Menu' onClick={() => setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile App</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={search} alt="" />
                <div className="navbar-search-icon">
                  <Link to="/cart"><img src={basket} alt="" /></Link>
                    <div className="dot"></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>

            </div>
        </div>
    )
}
