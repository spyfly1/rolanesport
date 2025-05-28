// components/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchResults({ items }) {
  const query = new URLSearchParams(useLocation().search).get('query')?.toLowerCase();

  const filtered = items.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.desc.toLowerCase().includes(query)
  );

  return (
    <div className="search-results">
      <h2>Результати пошуку для: "{query}"</h2>
      <div className="items">
        {filtered.length > 0 ? (
          filtered.map(item => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price} грн</p>
            </div>
          ))
        ) : (
          <p>Нічого не знайдено.</p>
        )}
      </div>
    </div>
  );
}
