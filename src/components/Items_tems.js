import React from "react";


function Items({ items, onAddToCart }) {
  return (
    <div className="items-grid">
      {items.map(item => (
        <div key={item.id} className="item-card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <b>{item.price} грн</b><br />
          <button onClick={() => onAddToCart(item)}>Додати в корзину</button>
        </div>
      ))}
    </div>
  );
}

export default Items;
