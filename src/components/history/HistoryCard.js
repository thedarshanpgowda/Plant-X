import React from "react";

import "./History.css";
import { Link } from "react-router-dom";

export const HistoryCard = ({ card }) => {
  return (
    <div className="history-container">
      <div className="history-plantcards">
        <div className="history-image">
          <img 
            src={card.imageUrl}
            alt="no"
          ></img>
        </div>
        <div className="history-details">
          <span className="plant-name">{card.name}</span>
          <p>
            {card.description}
          </p>
          {/* <Link to={"/analysis"} className="history-view">View more..</Link> */}
        </div>
      </div>
    </div>
  );
};