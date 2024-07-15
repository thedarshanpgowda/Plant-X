import React from "react";
import { HistoryCard } from "./HistoryCard";

export default function History() {
  const cardData = Array.from({ length: 10 }).map((_, index) => ({
  }));

  const value = [
    {
      "image_url": "https://www.thespruce.com/thmb/jdrmefneymmfBPbWRoZyv67pZ-E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/banana-tree-growing-profile-3269353-recirc-55a228cd3fa74023bfc392579aed763c.jpg",
      "description": "A beautiful, healthy plant thriving in optimal conditions, showcasing vibrant green leaves and robust growth. Such plants indicate proper nutrient availability and care.",
      "nutrient": "potassium"
    },
    {
      "image_url": "https://images.unsplash.com/photo-1685666002374-45c615906be7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      "description": "A banana plant showing signs of nitrogen deficiency. Symptoms include yellowing of older leaves and stunted growth. Nitrogen deficiency often occurs due to poor soil quality, inadequate fertilization, or leaching of nutrients.",
      "nutrient": "nitrogen"
    }
    , {
      "image_url": "https://animals.sandiegozoo.org/sites/default/files/2017-02/banana_leaves.jpg",
      "description": "A banana plant suffering from potassium deficiency. Symptoms include yellowing and browning of leaf edges, reduced disease resistance, and poor fruit quality. Addressing nutrient deficiencies promptly is essential for plant health.",
      "nutrient": "potassium"
    },

  ]


  return (
    <>
      <div className="history-container">



        {value.map((card, index) => (
          <HistoryCard card={card}
          />
        ))}
      </div>
    </>
  );
};
