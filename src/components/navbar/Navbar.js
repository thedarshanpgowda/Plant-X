import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [state, setState] = useState(false);
  let value;
  const colorChanger = () => {
    if (window.scrollY > 75) {
      setState(true);
    } else {
      setState(false);
    }
  };

  window.addEventListener("scroll", colorChanger);
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", colorChanger);
    };
  }, [setState]);

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
