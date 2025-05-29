import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // Для вставки контенту, залежно від маршруту

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />  {/* Це місце для відображення контенту залежно від маршруту */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
