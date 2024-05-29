// src/App.js
import React, { useState } from 'react';
import DateTimeSelector from './components/DateTimeSelector';
import DishCategory from './components/DishCategory';
import DishCarousel from './components/DishCarousel';
import RecommendedDishes from './components/RecommendedDishes';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Indian');
  const categories = ['Indian', 'Italian', 'Chinese', 'Mexican'];
  const dishes = [
    { name: 'Biryani', image: '/path/to/image' },
    // Add more dishes as needed
  ];
  const recommendedDishes = [
    {
      name: 'Masala Muglai',
      description: 'Chicken fried in deep tomato sauce with delicious spices',
      image: '/path/to/image',
    },
    // Add more recommended dishes as needed
  ];

  return (
    <div className="App">
      <DateTimeSelector />
      <DishCategory
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <DishCarousel dishes={dishes} />
      <RecommendedDishes recommendedDishes={recommendedDishes} />
    </div>
  );
};

export default App;

