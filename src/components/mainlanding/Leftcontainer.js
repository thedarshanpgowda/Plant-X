import React from 'react'
import { Link } from 'react-router-dom'

export default function Leftcontainer() {
    return (
        <div className="leftContainer">
            <div className="leftInnerContainer">
                <h1>Know your Banana plant's health</h1>
                <p className='moto'>
                    Post a <span><b>pic</b></span> & 
                    Know the <span>solution</span>
                </p>
                <p className='mainContent'>Diagnose plant diseases instantly with just a photo. Keep your <br /> plants healthy, effortlessly.</p>
                <Link to={'/upload'} className="callToActionBtn">
                    <p>Upload your Image</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/860/860826.png" alt="" />
                </Link>
            </div>
        </div>
    )
}
