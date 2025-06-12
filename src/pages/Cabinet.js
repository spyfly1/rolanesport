import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

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

 const handleSave = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/user/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Дані успішно збережені!');
      setIsEditing(false);
    } else {
      alert('Помилка збереження даних');
    }
  } catch (err) {
    console.error(err);
    alert('Серверна помилка');
  }
};


  const handleChangePassword = () => {
    // Тут має бути логіка зміни пароля (запит на сервер)
    alert('Пароль змінено (псевдо)');
    setIsChangingPassword(false);
  };

  return (
    <div className="wrapper" style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Особистий кабінет</h1>

      <div style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '0 auto 40px auto'
      }}>
        <h2>Мій аккаунт</h2>

        {isEditing ? (
          <>
            <label>
              Ім’я:<br />
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label><br /><br />
            <label>
              Email:<br />
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label><br /><br />
            <label>
              Адреса проживання:<br />
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label><br /><br />
            <label>
              Телефон:<br />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label><br /><br />

            <button onClick={handleSave} style={{ marginRight: '10px' }}>Зберегти</button>
            <button onClick={handleEditToggle}>Скасувати</button>
          </>
        ) : (
          <>
            <p><strong>Ім’я:</strong> {user.name || 'Невідомо'}</p>
            <p><strong>Email:</strong> {user.email || 'Невідомо'}</p>
            <p><strong>Адреса проживання:</strong> {user.address || 'Невідомо'}</p>
            <p><strong>Телефон:</strong> {user.phone || 'Невідомо'}</p>
            <button onClick={handleEditToggle} style={{ marginRight: '10px' }}>Редагувати дані</button>
            <button onClick={handlePasswordToggle}>Змінити пароль</button>
          </>
        )}

        {isChangingPassword && (
          <div style={{ marginTop: '20px' }}>
            <h3>Зміна пароля</h3>
            <label>
              Старий пароль:<br />
              <input type="password" name="oldPassword" />
            </label><br /><br />
            <label>
              Новий пароль:<br />
              <input type="password" name="newPassword" />
            </label><br /><br />
            <button onClick={handleChangePassword} style={{ marginRight: '10px' }}>Змінити</button>
            <button onClick={handlePasswordToggle}>Скасувати</button>
          </div>
        )}
      </div>

      <div style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '0 auto 40px auto'
      }}>
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
        <button onClick={logout} style={{ padding: '10px 20px', fontSize: '16px' }}>Вийти</button>
      </div>
    </div>
  );
};

export default Cabinet;

