import React from "react";
import "./Analysis.css";

const nutrients = [
  { name: "Water", value: "74.5g" },
  { name: "Copper", value: "74.5g" },
  { name: "Carbohydrates", value: "23%" },
  { name: "Fiber", value: "2-3%" },
  { name: "Potassium", value: "0.3-0.4%" },
  { name: "Other Minerals", value: "74.5g" },
];

const minerals = [
  { name: "water", value: "10g" },
  { name: "copper", value: "20g" },
];
const NutrientTable = () => {
  return (
    <div className="nutrient-content">
      {<h1>Nutrient Content</h1>}
      <div className="nutrient-container">
        {nutrients.map((nutrient) => (
          <div  key={nutrient.name} className="actualReadings">
            <div className="nutrient">
              <div className="nutrient-name">{nutrient.name}</div>
              <div className="nutrient-value">{nutrient.value}</div>
            </div>
            <div className="nutrient">
              <div className="nutrient-name">{nutrient.name}</div>
              <div className="nutrient-value">{nutrient.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutrientTable;
