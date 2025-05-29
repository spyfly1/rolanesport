import Categories from '../components/Categories'; 
import Items from '../components/Items_tems';
import React from 'react';

const HomePage = ({ items, addToCart, setCategory }) => (
  <>
    <Categories chooseCategory={setCategory} />
    <Items items={items} onAdd={addToCart} />
  </>
);

export default HomePage;

