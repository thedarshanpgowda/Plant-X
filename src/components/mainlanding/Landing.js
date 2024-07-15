import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import './Landing.css'
import Leftcontainer from './Leftcontainer'
import CommonAilements from './CommonAilements'
import Footer from './Footer'
import img from '../../images/imageLogo.png'
import { useLocation, useNavigate } from 'react-router'
// import { History} from '../history/History'


export default function Landing() {
    const [state, setState] = useState(false)
    const navigate = useNavigate()
    const clickHandler = () => {
        console.log("object")
        setState(prev => !prev)
    }

    return (
        <div className="mainLandingContainer">
            <div className="menuIcon" onClick={clickHandler}>
                <img src="https://cdn-icons-png.flaticon.com/128/4254/4254068.png" alt="xox" />
            </div>
            <div className="landing">
                <Navbar state={state} />
            </div>
            <div className="actualContainer">
                <Leftcontainer />
                <div className="rightContainer">
                    <img src="https://images.unsplash.com/photo-1551551313-fe7031e26248?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbmFuYSUyMHBsYW50fGVufDB8MXwwfHx8MA%3D%3D" alt="" />
                </div>
            </div>
            <div className="commonAilements">
                <CommonAilements />
            </div>
            <Footer />
        </div>
    )
}
