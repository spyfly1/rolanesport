import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ 
  toggleLogin, 
  toggleRegister, 
  toggleCart, 
  cartItemCount,  
  user 
}) => {
  return (
    <div>
      <Header 
        onLoginClick={toggleLogin}
        onRegisterClick={toggleRegister}
        toggleCart={toggleCart}
        cartCount={cartItemCount}   
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


