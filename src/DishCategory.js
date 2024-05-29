// src/components/DishCategory.js
import React from 'react';

const DishCategory = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="dish-category">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'active' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default DishCategory;
