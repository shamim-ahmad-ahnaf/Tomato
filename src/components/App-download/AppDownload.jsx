import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

export default function AppDownload() {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br /> Tomato App</p>
            <div className='app-download-platforms'>
                <img src={assets.play_store} alt="Download from Google Play" />
                <img src={assets.app_store} alt="Download from App Store" />
            </div>
        </div>
    )
}
