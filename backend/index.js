const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');

const pool = new Pool({
  host: 'dpg-d0rnqdje5dus739otukg-a.oregon-postgres.render.com',
  port: 5432,
  user: 'rolanadmin',
  password: '2TTDT306KqbZsylAzdfqZMHcd3MHPYzR',
  database: 'rolanesport',
  ssl: {
    rejectUnauthorized: false
  }
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Помилка підключення до бази:', err);
  } else {
    console.log('Успішне підключення до бази:', res.rows);
  }
});

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use('/img', express.static(path.join(__dirname, '..', 'public', 'Img')));

// Логін
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      res.json({
        success: true,
        user: {
          id: user.id,
          username: user.username,
          name: user.name,
          email: user.email,
          address: user.address,
          phone: user.phone
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Невірний логін або пароль' });
    }
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Помилка бази даних' });
  }
});

// Реєстрація
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ success: false, message: 'Користувач вже існує' });
    }

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

// Отримання користувача по ID
app.get('/api/user/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await pool.query(
      'SELECT id, username, name, email, address, phone FROM users WHERE id = $1',
      [userId]
    );

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ success: false, message: 'Користувача не знайдено' });
    }
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ success: false, message: 'Помилка сервера' });
  }
});

// Оновлення даних користувача
app.put('/api/user/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, address, phone } = req.body;

  try {
    await pool.query(
      'UPDATE users SET name = $1, email = $2, address = $3, phone = $4 WHERE id = $5',
      [name, email, address, phone, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Помилка оновлення користувача' });
  }
});

// Зміна пароля
app.post('/api/change-password', async (req, res) => {
  const { userId, oldPassword, newPassword } = req.body;

  if (!userId || !oldPassword || !newPassword) {
    return res.status(400).json({ success: false, message: 'Відсутні необхідні дані' });
  }

  try {
    const userRes = await pool.query(
      'SELECT password FROM users WHERE id = $1',
      [userId]
    );

    if (userRes.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Користувача не знайдено' });
    }

    const currentPassword = userRes.rows[0].password;

    if (currentPassword !== oldPassword) {
      return res.status(401).json({ success: false, message: 'Старий пароль неправильний' });
    }

    await pool.query(
      'UPDATE users SET password = $1 WHERE id = $2',
      [newPassword, userId]
    );

    res.json({ success: true, message: 'Пароль успішно змінено' });
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ success: false, message: 'Помилка сервера при зміні пароля' });
  }
});

// Історія замовлень користувача
app.get('/api/orders/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const ordersRes = await pool.query(
      `SELECT id, date, total 
       FROM orders 
       WHERE user_id = $1
       ORDER BY date DESC`,
      [userId]
    );

    if (ordersRes.rows.length > 0) {
      res.json({ success: true, orders: ordersRes.rows });
    } else {
      res.json({ success: true, orders: [] });
    }
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ success: false, message: 'Помилка сервера при отриманні замовлень' });
  }
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Запуск сервера

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущено на порту ${PORT}`);
});





