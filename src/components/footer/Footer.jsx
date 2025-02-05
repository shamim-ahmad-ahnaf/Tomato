import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Company Logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, vero dolor voluptatum velit dolore provident fugiat porro corporis repellendus?</p>
                    <div className="footer-social-icons">
                        <img src={assets.linkedin_icon} alt="Follow us on LinkedIn" />
                        <img src={assets.facebook_icon} alt="Like us on Facebook" />
                        <img src={assets.twitter_icon} alt="Follow us on Twitter" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a href="tel:01604171812">01604171812, 01748186766</a></li>
                        <li><a href="mailto:shamimahmadahmad@gmail.com">shamimahmadahmad@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>&copy; 2025 Tomato.com - All Rights Reserved</p>
        </div>
    );
}
