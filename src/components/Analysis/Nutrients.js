import React, { useEffect } from "react";
import styled from "styled-components";
import "./Analysis.css";
import useAuth from "../../hooks.js/useAuth";

const Bar = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  position: absolute;
  top: 0;
  background-color: #a7cfa7c7;
`;

const standardValues = {
  Boron: 0.015,
  Calcium: 7.4,
  Iron: 0.58,
  Potassium: 1.9,
};

const NutrientTable = ({ setRemedies }) => {
  const { response } = useAuth();
  const nutrients = response.data.response;
  const { Most_Likely_Deficiency, ...otherNutrients } = nutrients || {};

  useEffect(() => {
    if (Most_Likely_Deficiency) {
      setRemedies(Most_Likely_Deficiency);
    }
  
  }, []);

  const calculateDeficiency = (value, name) =>
    (standardValues[name] - value * standardValues[name]).toFixed(2);

  return (
    nutrients && (
      <div className="nutrient-content">
        <h1>Nutrient Deficiency</h1>
        <div className="nutrient-container">
          {Object.entries(otherNutrients).map(([name, values], i) => (
            <div key={i} className={`blockContainer blockContainer${i}`}>
              <div className={`actualReadings actualReadings${i}`}>
                <div className="nutrient">
                  <div className="nutrient-details">
                    <div className="nutrient-name">
                      <div className="nutrientName">{name}</div>
                      &nbsp;
                      <b>
                        <div className="Percentage">
                          : &nbsp;{(values.Deficient * 100).toFixed(2)}%
                        </div>
                      </b>
                      <div className="presentValue">Present Content</div>&nbsp;
                      <div className="actualValue">
                        : &nbsp;{calculateDeficiency(values.Deficient, name)}g/kg
                      </div>
                    </div>
                    <div className="standard-value">
                      Standard: {standardValues[name]}g/kg
                    </div>
                  </div>
                </div>
              </div>
              <div className="barGraph">
                <Bar width={(values.Deficient * 100).toFixed(2)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default NutrientTable;
