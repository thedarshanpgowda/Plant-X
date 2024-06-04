import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [state, setState] = useState(false)


    const colorChanger = () => {
        if (window.scrollY > 75) {
            setState(true)
        }
        else {
            setState(false)
        }
    }

    window.addEventListener('scroll', colorChanger)
    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', colorChanger)
        }
    }, [setState])
    return (
        <div className={state ? "navbarContainer navbarContainer-bg" : "navbarContainer"}>
            <div className="navbarLogo">
                <h2>logo</h2>
            </div>
            <ul className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>Nutrient Analysis</li>
                <li>History</li>
            </ul>
        </div>
    )
}
