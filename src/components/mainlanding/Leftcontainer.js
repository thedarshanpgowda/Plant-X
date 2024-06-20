import React from 'react'
import { Link } from 'react-router-dom'

export default function Leftcontainer() {
    return (
        <div className="leftContainer">
            <div className="leftInnerContainer">
                <h1>
                    Post a <span>pic</span> & <br />
                    Know the <span>solution</span>
                </h1>
                <p className='mainContent'>At Plant Orbit, diagnose plant diseases instantly with just a photo. Keep your <br /> plants healthy, effortlessly.</p>
                <Link to={'/upload'} className="callToActionBtn">
                    <p>Upload your Image</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/860/860826.png" alt="" />
                </Link>
            </div>
        </div>
    )
}
