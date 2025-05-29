import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = ({ user, cart }) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Якщо користувач не авторизований, редіректимо на головну
      navigate('/');
    }
  }, [user, navigate]);

  const total = cart
    .reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0)
    .toFixed(2);

  const handleConfirmOrder = () => {
    // Запит на сервер для збереження замовлення (написати API)
    console.log('Замовлення підтверджено!');
    setOrderConfirmed(true);
  };

  return (
    <div className="payment-container">
      <h1>Оплата</h1>
      <h2>Особисті дані</h2>
      <p><strong>Ім’я:</strong> {user?.name || 'Невідомо'}</p>
      <p><strong>Email:</strong> {user?.email || 'Невідомо'}</p>
      <p><strong>Адреса:</strong> {user?.address || 'Невідомо'}</p>
      <p><strong>Телефон:</strong> {user?.phone || 'Невідомо'}</p>

      <h2>Деталі замовлення</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.title} — {item.quantity} шт. — {item.price} грн</li>
        ))}
      </ul>
      <div><strong>Сума замовлення: {total} грн</strong></div>

      <button onClick={handleConfirmOrder}>Підтвердити замовлення</button>

      {orderConfirmed && <p>Ваше замовлення підтверджено! Очікуйте на доставку.</p>}
    </div>
  );
};

export default Payment;
