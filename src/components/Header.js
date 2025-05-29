import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../pages/SearchBar';
import './Header.css';

export default function Header({ toggleCart, cartCount, onLoginClick, onRegisterClick, user, onLogout }) {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    // Перенаправлення на сторінку з результатами
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <header>
      <div className="header-top">
        <span className='logo'>RolaneSport</span>

        {/* Компонент SearchBar */}
        <SearchBar onSearch={handleSearch} />

        <Link to="/" className="home-button">Головна</Link>

        <ul className='navigation'>
          {user ? (
            <>
              <li>Привіт, {user.name}!</li>
              <li><Link to="/cabinet" className="header-auth-btn">Кабінет</Link></li>
              <li><button className="header-auth-btn" onClick={onLogout}>Вийти</button></li>
            </>
          ) : (
            <>
              <li><button className="header-auth-btn" onClick={onLoginClick}>Увійти</button></li>
              <li><button className="header-auth-btn" onClick={onRegisterClick}>Зареєструватися</button></li>
            </>
          )}
          <li>
            <button onClick={toggleCart} className="cart-btn">🛒 Корзина ({cartCount})</button>
          </li>
        </ul>
      </div>
      <div className='presentation'></div>
    </header>
  );
}




