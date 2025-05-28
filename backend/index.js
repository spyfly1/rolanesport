const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');  // Імпортуємо пакет для PostgreSQL
const pool = new Pool({
  host: 'dpg-d0rnqdje5dus739otukg-a.oregon-postgres.render.com',  // Хост з Render
  port: 5432,  // Порт PostgreSQL
  user: 'rolanadmin',  // Користувач з Render
  password: '2TTDT306KqbZsylAzdfqZMHcd3MHPYzR',  // Пароль з Render
  database: 'rolanesport',  // Назва твоєї бази даних на Render
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
app.use(express.json()); // для парсингу JSON тіла запиту

// ========== API РОУТИ ==========

// Товари (можна буде замінити на дані з БД)
app.get('/api/products', (req, res) => {
  pool.query('SELECT * FROM products', (err, results) => {  // Використовуємо pool для запиту до PostgreSQL
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ error: 'Помилка при завантаженні товарів' });
    }
    res.json(results.rows);  // PostgreSQL повертає результат через rows
  });
});

// Імітація оплати
app.post('/api/payment', (req, res) => {
  // У реальному випадку тут зберігалися б замовлення в БД
  res.json({ success: true, message: 'Оплата успішна! Дякуємо за замовлення.' });
});

// Логін користувача / адміна
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  pool.query(
    'SELECT * FROM users WHERE email = $1 AND password = $2',  // Використовуємо параметризовані запити
    [email, password],
    (err, results) => {
      if (err) {
        console.error('DB error:', err);
        return res.status(500).json({ error: 'Помилка бази даних' });
      }

      if (results.rows.length > 0) {
        const user = results.rows[0];  // PostgreSQL повертає результат через rows
        res.json({
          success: true,
          user: {
            id: user.id,
            email: user.email,
            role: user.role, // 'admin' або 'user'
          },
        });
      } else {
        res.status(401).json({ success: false, message: 'Невірний email або пароль' });
      }
    }
  );
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущено на порту ${PORT}`);
});

