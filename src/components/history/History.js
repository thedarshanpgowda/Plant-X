import React from "react";
import { HistoryCard } from "./HistoryCard";

export default function History(){
  const cardData = Array.from({ length: 10 }).map((_, index) => ({
  }));

  const value = [
    {
        "image_url": "https://images.unsplash.com/photo-1690495371968-e57ac4c198dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D",
        "description": "A beautiful, healthy plant thriving in optimal conditions, showcasing vibrant green leaves and robust growth. Such plants indicate proper nutrient availability and care.",
        "nutrient": "potassium"
    },
    {
        "image_url": "https://example.com/path/to/nutrient-deficient-plant-image.jpg",
        "description": "A banana plant suffering from potassium deficiency. Symptoms include yellowing and browning of leaf edges, reduced disease resistance, and poor fruit quality. Addressing nutrient deficiencies promptly is essential for plant health.",
        "nutrient": "potassium"
    },
    {
        "image_url": "https://example.com/path/to/nutrient-deficient-plant-2.jpg",
        "description": "A banana plant showing signs of nitrogen deficiency. Symptoms include yellowing of older leaves and stunted growth. Nitrogen deficiency often occurs due to poor soil quality, inadequate fertilization, or leaching of nutrients.",
        "nutrient": "nitrogen"
    }
]

  
  return (
    <>
    <div className="history-container">



      {value.map((card, index) => (
        <HistoryCard card = {card}
        />
      ))}
    </div>
    </>
  );
};
