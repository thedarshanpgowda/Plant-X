import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Analysis.css";
import useAuth from "../../hooks.js/useAuth";
import { useTranslation } from 'react-i18next';

const Bar = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  position: absolute;
  top: 0;
  background-color: #f87c63;
`;

const standardValues = {
  Boron: 0.015,
  Calcium: 7.4,
  Iron: 0.58,
  Potassium: 1.9,
};

const NutrientTable = ({ setRemedies }) => {
  const { t, i18n } = useTranslation();
  const { response } = useAuth();
  const nutrients = response.data.response;
  const { Most_Likely_Deficiency, ...otherNutrients } = nutrients || {};
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (Most_Likely_Deficiency) {
      setRemedies(Most_Likely_Deficiency);
    }
  }, [Most_Likely_Deficiency]);

  const calculateDeficiency = (value, name) =>
    (standardValues[name] - value * standardValues[name]).toFixed(2);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    nutrients && (
      <div className="nutrient-content">
        <h1>{t('Nutrient Deficiency')}</h1>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="kn">Kannada</option>
        </select>
        <div className="nutrient-container">
          {Object.entries(otherNutrients).map(([name, values], i) => (
            <div key={i} className={`blockContainer blockContainer${i}`}>
              <div className={`actualReadings actualReadings${i}`}>
                <div className="nutrient">
                  <div className="nutrient-details">
                    <div className="nutrient-name">
                      <div className="nutrientName">{t(name)}</div>
                      &nbsp;
                      <b>
                        <div className="Percentage">
                          : &nbsp;{(values.Deficient * 100).toFixed(2)}%
                        </div>
                      </b>
                      <div className="presentValue">{t('Present Content')}</div>&nbsp;
                      <div className="actualValue">
                        : &nbsp;{calculateDeficiency(values.Deficient, name)}g/kg
                      </div>
                    </div>
                    <div className="standard-value">
                      {t('Standard')}: {standardValues[name]}g/kg
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
