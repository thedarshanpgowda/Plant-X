import React from "react";
import { HistoryCard } from "./HistoryCard";
import Navbar from "../navbar/Navbar";

export const History = () => {
  const cardData = Array.from({ length: 10 }).map((_, index) => ({
  
  }));
  
  return (
    <>
    {/* <Navbar/> */}
    <div className="history-container">

      {cardData.map((card, index) => (
        <HistoryCard
        />
      ))}
    </div>
    </>
  );
};
