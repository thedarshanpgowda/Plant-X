import React from "react";
import { HistoryCard } from "./HistoryCard";

export default function History(){
  const cardData = Array.from({ length: 10 }).map((_, index) => ({
  }));
  
  return (
    <>
    <div className="history-container">

      {cardData.map((card, index) => (
        <HistoryCard
        />
      ))}
    </div>
    </>
  );
};
