import React from "react";
import "./Analysis.css";
import NutrientTable from "./Nutrients";
// import Navbar from "../navbar/Navbar";


export const Analysis = () => {
  return (
    <>
      <div className="analysis-container">
        <div className="garden-info">
          <div className="garden-image">
            <img src="https://cdn.magicdecor.com/com/2023/02/29183945/image-1689515744-1191.jpg" alt="avdf"></img>
          </div>
          <div className="garden-text">
            <h1>Banana Plant</h1>
            <p>Bananas are not just tasty; they're packed with essential nutrients and proteins vital for a balanced diet. Explore the nutritional powerhouse of bananas with us.

              Based on the image, the diagnosis suggests a deficiency in [specific nutrient/mineral]. Symptoms include yellowing leaves, stunted growth, and leaf distortion. To address this, consider applying potassium, sodium and nitrogen fertilizers and monitoring watering practices. Adjusting soil pH if necessary can also aid in nutrient uptake. Prompt action can promote healthier plant growth and vitality.
            </p>
          </div>
        </div>
        <div className="nutrients">
          <NutrientTable />
        </div>
      </div>
    </>
  );
};

