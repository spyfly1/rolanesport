import React, { useState } from 'react';

export default function Categories({ chooseCategory }) {
  const [activeCategory, setActiveCategory] = useState("Всі");
  const categories = ["Всі", "Бокс", "Футбол", "Фітнес", "Взуття", "Аксесуари", "Одяг", "Баскетбол", "Силові тренажери", "Туризм", "Захист"];

  const handleClick = (cat) => {
    setActiveCategory(cat);
    chooseCategory(cat);
  };

  return (
    <div className="categories">
      {categories.map((cat, index) => (
        <button
          key={index}
          className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
