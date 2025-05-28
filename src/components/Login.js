import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const correctUsername = 'admin';
    const correctPassword = '1234';

    if (username === correctUsername && password === correctPassword) {
      onLogin();
    } else {
      setError('Неправильний логін або пароль');
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

