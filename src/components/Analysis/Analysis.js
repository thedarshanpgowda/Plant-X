import React from "react";
import "./Analysis.css";
import NutrientTable from "./Nutrients";
import useAuth from "../../hooks.js/useAuth";


export default function Analysis() {
  const { response } = useAuth()
  console.log(response)

  return response && (
    <>
      <div className="analysis-container">
        <div className="garden-info">
          <div className="garden-image">
            <img src={response.img} alt="avdf"></img>
          </div>

        </div>
        <div className="nutrients">
          <NutrientTable />
        </div>
        <div className="garden-text">
          <h1>Remedies</h1>
          <p>{response?.remedy ? response.remedy.split("**").map(ele => {
            return (
              <>{ele}</>
            )
          }) : "No remedies, your plant is healthy"}</p>
        </div>
      </div>
    </>
  );
};

