import React from "react";
import "./About.css";
import { AboutCards } from "./AboutCards";
import { about } from "./AboutData";
import Footer from "../mainlanding/Footer";

export default function About(){
  return (
    <div className="about-container">
      <div className="about-intro">
        <div className="mango">
          <div className="accessoryBlock">
            <div className="accessories">
              <h1>Earth</h1>
              <p>Banana Plant</p>
            </div>
          </div>
        </div>
        <div className="bananaImage">
          <img
            src="https://images.unsplash.com/photo-1685666002374-45c615906be7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
            alt="banana"
          />
        </div>
      </div>
      {/* <AboutCards /> */}

      <div className="about-container-block">
        {
          about.map((val) => (
            <AboutCards key={Math.random()} val={val} />
          ))
        }
      </div>
      <Footer/>
    </div>
  );
};
