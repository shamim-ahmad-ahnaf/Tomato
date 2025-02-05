import React, { useState } from 'react';
import './LoginPopupe.css';
import { assets } from '../../assets/assets';

export default function LoginPopupe({ setShowLogin }) {
    const [currStep, setCurrStep] = useState('Login');

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                {/* Title Section */}
                <div className="login-popup-title">
                    <h2>{currStep}</h2>
                    <img 
                        onClick={() => setShowLogin(false)} 
                        src={assets.cross_icon} 
                        alt="Close"
                    />
                </div>

                {/* Input Fields */}
                <div className="login-popup-input-group">
                    {currStep !== "Login" && (
                        <div className="input-field">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                    )}

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your Email" required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Your Password" required />
                    </div>
                </div>

                {/* Action Button */}
                <button>{currStep === "Sign Up" ? "Create Account" : "Login"}</button>

                {/* Terms & Conditions */}
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing i agree to the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>.</p>
                </div>

                {/* Toggle Between Login & Sign Up */}
                <p>
                    {currStep === "Login" ? (
                        <>Don't have an account? <span onClick={() => setCurrStep("Sign Up")}>Register here</span></>
                    ) : (
                        <>Already have an account? <span onClick={() => setCurrStep("Login")}>Login</span></>
                    )}
                </p>
            </form>
        </div>
    );
}
