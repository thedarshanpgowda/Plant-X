import React from 'react'
import Navbar from '../navbar/Navbar'
import './Landing.css'
import Leftcontainer from './Leftcontainer'
import CommonAilements from './CommonAilements'
import Footer from './Footer'
import img from '../../images/imageLogo.png'

export default function Landing() {
    return (
        <div className="mainLandingContainer">
            <div className="landing">
                <Navbar />
            </div>
            <div className="actualContainer">
                <Leftcontainer />
                <div className="rightContainer">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="commonAilements">
                <CommonAilements />
            </div>
            <Footer />
        </div>
    )
}
