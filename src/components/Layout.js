import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ 
  toggleLogin, 
  toggleRegister, 
  toggleCart, 
  cartItemCount,   // 👈 приходить з App.jsx
  user 
}) => {
  return (
    <div>
      <Header 
        onLoginClick={toggleLogin}
        onRegisterClick={toggleRegister}
        toggleCart={toggleCart}
        cartCount={cartItemCount}   // ✅ використовуємо проп cartItemCount
        user={user}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


