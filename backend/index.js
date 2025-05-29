const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path'); // Додано для роботи з шляхами до файлів

const pool = new Pool({
  host: 'dpg-d0rnqdje5dus739otukg-a.oregon-postgres.render.com',
  port: 5432,
  user: 'rolanadmin',
  password: '2TTDT306KqbZsylAzdfqZMHcd3MHPYzR',
  database: 'rolanesport',
});

// Тестове з'єднання
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Помилка підключення до бази:', err);
  } else {
    console.log('Успішне підключення до бази:', res.rows);
  }
});

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Налаштування для обробки статичних файлів (зображення і т.д.)
app.use(express.static(path.join(__dirname, '..', 'build')));

// Сервінг зображень з public/Img
app.use('/img', express.static(path.join(__dirname, '..', 'public', 'Img')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// ========== API РОУТИ ==========

// Логін користувача
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Параметризований запит для безпеки
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      res.json({ success: true, user: { id: user.id, username: user.username } });
    } else {
      res.status(401).json({ success: false, message: 'Невірний логін або пароль' });
    }
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Помилка бази даних' });
  }
});

// Реєстрація користувача
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Перевірка чи є вже користувач з таким логіном
    const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ success: false, message: 'Користувач вже існує' });
    }

    // Додавання нового користувача до БД
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, password]
    );

    const newUser = result.rows[0];
    res.status(201).json({ success: true, user: { id: newUser.id, username: newUser.username } });
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Помилка бази даних' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущено на порту ${PORT}`);
});



