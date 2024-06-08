import React from "react";

import "./History.css";
import { Link } from "react-router-dom";

export const HistoryCard = () => {
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
          <span className="plant-name">Plant Name()</span>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <Link to={"/analysis"} className="history-view">View more..</Link>
        </div>
      </div>
    </div>
  );
};