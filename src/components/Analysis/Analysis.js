import React, { useEffect, useState } from "react";
import "./Analysis.css";
import NutrientTable from "./Nutrients";
import useAuth from "../../hooks.js/useAuth";
import axios from "axios";

export default function Analysis() {
  const { response } = useAuth();

  const [result, setResult] = useState("");
  const [remedyDet, setRemedyDet] = useState();
  const setRemediesValue = (data) => {
    console.log(data);
    setResult(data);
  };

  const fetchData = async (results) => {
    console.log(results?.response);
    try {
      const result = await axios.post("http://localhost:3000/remedy", {
        data: results?.response,
      });
      console.log(result);
      setRemedyDet(result?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if(response?.data){
      fetchData(response.data);
    }
  }, []);
  return (
    response && (
      <>
        <div className="analysis-container">
          <div className="nutrientAnalysis">
            <div className="garden-info">
              <div className="garden-image">
                <img src={response.img} alt="avdf"></img>
              </div>
            </div>
            <div className="nutrients">
              <NutrientTable setRemedies={setRemediesValue} />
            </div>
          </div>
          {result?.Health_Status === "Deficient" && (
            <div className="blockContainer most-likely-deficiency-container">
              <div className="most-likely-deficiency">
                <h2>Deficient in {result.Type} nutrient</h2>
                {/* <p>Type: {result.Type}</p>
                <p>Health Status: {result.Health_Status}</p> */}
                {/* <p>Confidence: {(Most_Likely_Deficiency.Confidence * 100).toFixed(2)}%</p> */}
              </div>
            </div>
          )}
          <div className="garden-text">
            <h1>Remedies</h1>
            <ul>
              {remedyDet
                ? remedyDet.remedy.split("**").map((e) => {
                    return <li key={Math.random()}>{e}</li>;
                  })
                : "Generating..."}
            </ul>
          </div>
        </div>
      </>
    )
  );
}
