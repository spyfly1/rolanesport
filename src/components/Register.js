import React, { useState } from 'react';

function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (username && password) {
      onRegister({ username });
    } else {
      setError('Будь ласка, введіть логін і пароль.');
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
        className="login-input"
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button type="submit" className="login-button">Зареєструватися</button>
    </form>
  );
}

export default Register;
