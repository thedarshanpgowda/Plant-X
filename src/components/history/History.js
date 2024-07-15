import React from "react";
import { HistoryCard } from "./HistoryCard";

export default function History() {
  const cardData = Array.from({ length: 10 }).map((_, index) => ({
  }));

  const value = [
    {
      "name": "Nitrogen",
      "description": "Nitrogen is vital for the growth and development of banana plants. It plays a key role in the synthesis of proteins, chlorophyll, and enzymes.",
      "imageUrl": "http://www.agritech.tnau.ac.in/horticulture/plant_nutri/images/banana/b_n1.jpg",
      "imageStyle": {
        "rotate": "-90deg"
      }
    },
    {
      "name": "Potassium",
      "description": "Potassium is essential for the proper functioning of banana plants, influencing water uptake, enzyme activation, and photosynthesis.",
      "imageUrl": "https://st.hzcdn.com/simgs/ea42c87904cf5056_9-2664/_.jpg"
    },
    {
      "name": "Iron",
      "description": "Iron is a critical component of chlorophyll, the molecule responsible for photosynthesis.",
      "imageUrl": "https://www.researchgate.net/profile/Kimberly-Moore-12/publication/319250831/figure/fig1/AS:530588442791936@1503513550683/Iron-deficiency-chlorotic-areas-observed-on-Williams-bananas-grown-in-sugarcane.png"
    }
  ]


  return (
    <>
      <div className="history-container">



        {value.map((card, index) => (
          <HistoryCard key={Math.random()} card={card}
          />
        ))}
      </div>
    </>
  );
};
