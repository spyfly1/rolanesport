import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/register', {  // шлях до твоєї реєстрації
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        onRegister(data.user);  // Передаємо користувача в батьківський компонент
      } else {
        setError(data.message);  // Виводимо помилку, якщо реєстрація не вдалася
      }
    } catch (err) {
      setError('Сталася помилка при реєстрації');
    }
  };

  return (
    <form className="login-modal" onSubmit={handleRegister}>
      <h2>Реєстрація</h2>
      {error && <p className="login-error">{error}</p>}
      <input
        type="text"
        placeholder="Логін"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="login-input"
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="login-input"
      />
      <button type="submit" className="login-button">Зареєструватися</button>
    </form>
  );
};

export default Register;

