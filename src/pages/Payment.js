import React, { useState, useEffect } from 'react';
import './Payment.css'; // Обов’язково підключи CSS

const Payment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Дані замовлення:', formData);
    setShowToast(true);

    // Очистка форми
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      email: '',
    });

    // Автоматично сховати повідомлення через 3 секунди
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="wrapper">
      <h2 className="payment-title">Оформлення замовлення</h2>

      <form className="payment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Ім'я"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Прізвище"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Адреса доставки"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email (необов'язково)"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit" className="login-button">Підтвердити замовлення</button>
      </form>

      {showToast && (
        <div className="toast-message">
          ✅ Замовлення успішно оформлено!
        </div>
      )}
    </div>
  );
};

export default Payment;


