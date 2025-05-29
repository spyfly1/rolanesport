import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {  // або зміни на свій хост бекенду
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        onLogin(data.user);  // Передаємо дані користувача в батьківський компонент
      } else {
        setError(data.message);  // Виводимо помилку, якщо логін чи пароль невірні
      }
    } catch (err) {
      setError('Сталася помилка при спробі авторизації');
    }
  };

  return (
    <form className="login-modal" onSubmit={handleLogin}>
      <h2>Авторизація</h2>
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
      <button type="submit" className="login-button">Увійти</button>
    </form>
  );
};

export default Login;

