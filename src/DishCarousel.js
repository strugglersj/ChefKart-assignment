// src/components/DishCarousel.js
import React from 'react';

const DishCarousel = ({ dishes }) => {
  return (
    <div className="dish-carousel">
      {dishes.map((dish, index) => (
        <div key={index} className="dish-item">
          <img src={dish.image} alt={dish.name} />
          <p>{dish.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DishCarousel;
