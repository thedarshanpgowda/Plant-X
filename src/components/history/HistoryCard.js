import React from "react";

import "./History.css";
import { Link } from "react-router-dom";

export const HistoryCard = ({ card }) => {
  return (
    <div className="history-container">
      <div className="history-plantcards">
        <div className="history-image">
          <img
            src="https://images.unsplash.com/photo-1690495371968-e57ac4c198dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="no"
          ></img>
        </div>
        <div className="history-details">
          <span className="plant-name">{card.nutrient}</span>
          <p>
            {card.description}
          </p>
          <Link to={"/analysis"} className="history-view">View more..</Link>
        </div>
      </div>
    </div>
  );
};