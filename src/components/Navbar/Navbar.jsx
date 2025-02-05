import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.png'
import basket from '../../assets/basket_icon.png'


export default function Navbar() {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={logo} alt="" className='navbar-logo' />
            <ul className='nav-menu'>
                <li onClick={() => setMenu("home")} className={menu==="home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile App</li>
                <li onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <img src={search} alt="" />
                <div className="navbar-search-icon">
                    <img src={basket} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>

            </div>
        </div>
    )
}
