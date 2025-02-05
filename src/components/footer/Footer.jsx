import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

export default function Footer() {
    return (
        <footer className='footer' id='footer'>
            <div className='footer-content'>

                {/* Left Section */}
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Company Logo" className="footer-logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, vero dolor voluptatum velit dolore provident fugiat porro corporis repellendus?</p>
                    <div className="footer-social-icons">
                        <a href="#"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
                        <a href="#"><img src={assets.facebook_icon} alt="Facebook" /></a>
                        <a href="#"><img src={assets.twitter_icon} alt="Twitter" /></a>
                    </div>
                </div>

                {/* Center Section */}
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a href="tel:01604171812">01604171812, 01748186766</a></li>
                        <li><a href="mailto:shamimahmadahmad@gmail.com"> shamimahmadahmad@gmail.com</a></li>
                    </ul>
                </div>
            </div>

            <hr />

            <p className='footer-copyright'>&copy; 2025 Tomato.com - All Rights Reserved</p>
        </footer>
    );
}
