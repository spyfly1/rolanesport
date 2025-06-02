import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Cabinet.css';

const Cabinet = ({ user, logout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    address: user?.address || '',
    phone: user?.phone || '',
  });

  if (!user) {
    return <Navigate to="/" />;
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setIsChangingPassword(false);
  };

  const handlePasswordToggle = () => {
    setIsChangingPassword(!isChangingPassword);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSave = () => {
    alert('Дані збережено: ' + JSON.stringify(formData, null, 2));
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    alert('Пароль змінено (псевдо)');
    setIsChangingPassword(false);
  };

  return (
    <div className="wrapper">
      <h1>Особистий кабінет</h1>

      <div className="cabinet-container">
        <h2>Мій аккаунт</h2>

        {isEditing ? (
          <>
            <label>
              Ім’я:<br />
              <input
                className="login-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br /><br />
            <label>
              Email:<br />
              <input
                className="login-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br /><br />
            <label>
              Адреса проживання:<br />
              <input
                className="login-input"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
            <br /><br />
            <label>
              Телефон:<br />
              <input
                className="login-input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <br /><br />
            <button onClick={handleSave} className="login-button">Зберегти</button>
            <button onClick={handleEditToggle} className="auth-button">Скасувати</button>
          </>
        ) : (
          <>
            <p><strong>Ім’я:</strong> {user.name || 'Невідомо'}</p>
            <p><strong>Email:</strong> {user.email || 'Невідомо'}</p>
            <p><strong>Адреса проживання:</strong> {user.address || 'Невідомо'}</p>
            <p><strong>Телефон:</strong> {user.phone || 'Невідомо'}</p>
            <button onClick={handleEditToggle} className="login-button">Редагувати дані</button>
            <button onClick={handlePasswordToggle} className="auth-button">Змінити пароль</button>
          </>
        )}

        {isChangingPassword && (
          <div className="password-section">
            <h3>Зміна пароля</h3>
            <label>
              Старий пароль:<br />
              <input className="login-input" type="password" name="oldPassword" />
            </label>
            <br /><br />
            <label>
              Новий пароль:<br />
              <input className="login-input" type="password" name="newPassword" />
            </label>
            <br /><br />
            <button onClick={handleChangePassword} className="login-button">Змінити</button>
            <button onClick={handlePasswordToggle} className="auth-button">Скасувати</button>
          </div>
        )}
      </div>

      <div className="cabinet-container">
        <h2>Історія замовлень</h2>
        {user.orders && user.orders.length > 0 ? (
          <ul>
            {user.orders.map(order => (
              <li key={order.id}>
                Замовлення #{order.id} — {order.date} — Сума: {order.total} грн
              </li>
            ))}
          </ul>
        ) : (
          <p>Історія замовлень порожня</p>
        )}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button onClick={logout} className="login-button">Вийти</button>
      </div>
    </div>
  );
};

export default Cabinet;


