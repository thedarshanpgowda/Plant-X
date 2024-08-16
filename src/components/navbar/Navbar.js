import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setReduxState } from "../../store/initialSlice";

export default function Navbar(props) {
  // const [state, setState] = useState(false);
  const state = useSelector((state) => state.initial.state)
  const dispatch = useDispatch()

  let value;
  const colorChanger = () => {
    if (window.scrollY > 75) {
      dispatch(setReduxState(true))
      // setState(true);
    } else {
      // setState(false);
      dispatch(setReduxState(false))
    }
  };

  window.addEventListener("scroll", colorChanger);
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", colorChanger);
    };
  }, []);

  const getClass = () => {
    const baseClass = state ? "navbarContainer navbarContainer-bg" : "navbarContainer"
    const iconClass = props.state ? "mtop0" : " ";

    return baseClass + " " + iconClass;

  }

  return (
    <div
      className={getClass()}
    >
      <div className="navbarLogo">
        <h2>Plant Orbit</h2>
      </div>
      <ul className="navbar">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/analysis"}>Nutrient Analysis</Link>
        </li>
        <li>
          <Link to={"/history"}> History</Link>
        </li>
      </ul>

    </div>
  );
}
