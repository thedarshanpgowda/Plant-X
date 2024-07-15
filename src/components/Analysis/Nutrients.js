import React from "react";
import "./Analysis.css";
import useAuth from "../../hooks.js/useAuth";
import styled from "styled-components";

const Bar = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  position: absolute;
  top: 0;
  background-color: #a7cfa7c7;
`;

const standardValues = {
  Boron: 0.16,
  Calcium: 0.03,
  Iron: 0.25,
  Potassium: 3.05,
  // Add other standard values here
};

const NutrientTable = () => {
  const { response } = useAuth();
  const nutrients = response.response;

  // Separate the Most Likely Deficiency from other nutrients
  const { Most_Likely_Deficiency, ...otherNutrients } = nutrients || {};

  return nutrients && (
    <div className="nutrient-content">
      <h1>Nutrient Content</h1>
      <div className="nutrient-container">
        {Object.entries(otherNutrients).map(([name, values], i) => (
          <div key={i} className={`blockContainer blockContainer${i}`}>
            <div className={`actualReadings actualReadings${i}`}>
              <div className="nutrient">
                <div className="nutrient-details">
                  <div className="nutrient-name">
                    <span className="nutrientName">{name}</span>&nbsp; : &nbsp;<span><b>{(values.Healthy).toFixed(4)}mg</b></span>
                  </div>
                  <div className="standard-value">
                    Standard: <b>{standardValues[name]}mg</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="barGraph">
              <Bar width={(values.Healthy * 100).toFixed(2)}></Bar>
            </div>
          </div>
        ))}
        {Most_Likely_Deficiency && (
          <div className="blockContainer most-likely-deficiency-container">
            <div className="most-likely-deficiency">
              <h2>Review</h2>
              <p>Type: {Most_Likely_Deficiency.Type}</p>
              <p>Health Status: {Most_Likely_Deficiency.Health_Status}</p>
              {/* <p>Confidence: {(Most_Likely_Deficiency.Confidence * 100).toFixed(2)}%</p> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutrientTable;
