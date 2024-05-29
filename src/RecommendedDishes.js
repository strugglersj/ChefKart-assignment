// src/components/RecommendedDishes.js
import React from 'react';

const RecommendedDishes = ({ recommendedDishes }) => {
  return (
    <div className="recommended-dishes">
      {recommendedDishes.map((dish, index) => (
        <div key={index} className="recommended-dish-item">
          <img src={dish.image} alt={dish.name} />
          <div>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <button>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedDishes;
