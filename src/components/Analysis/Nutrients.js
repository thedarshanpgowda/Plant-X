import React from "react";
import "./Analysis.css";
import useAuth from "../../hooks.js/useAuth";
import styles from "styled-components";



const NutrientTable = () => {
  const { response } = useAuth()
  const nutrients = response.response
  return nutrients && (
    <div className="nutrient-content">
      {<h1>Nutrient Content</h1>}
      <div className="nutrient-container">
        {Object.entries(nutrients).map(((nutrient, i) => {
          console.log(nutrient)
          return (
            <div key={Math.random()} className={`actualReadings actualReadings${i}`}>
              <div className="nutrient">
                <div className="nutrient-name">{nutrient[0]}</div>
                <div className="nutrient-value">{nutrient[1]}</div>
              </div>
              <div className="nutrient">
                <div className="nutrient-name">{nutrient[0]}</div>
                <div className="nutrient-value">{nutrient[0] === "Boron" ? "0.16" : nutrient[0] === "Healthy" ? "0" : nutrient[1]}</div>
              </div>
            </div>
          )
        }))}
      </div>
    </div>
  );
};

export default NutrientTable;
