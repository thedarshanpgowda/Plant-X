import React from 'react'
import Navbar from '../navbar/Navbar'
import './Landing.css'
import Leftcontainer from './Leftcontainer'

export default function Landing() {
    return (
        <div className="mainLandingContainer">
            <div className="landing">
                <Navbar />
            </div>
            <div className="actualContainer">
                <Leftcontainer />
                <div className="rightContainer">

                </div>
            </div>
            <div className="commonAilements">
                <h1></h1>
            </div>
        </div>
    )
}
