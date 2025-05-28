const { Pool } = require('pg');

const pool = new Pool({
  user: 'rolanadmin',
  host: 'dpg-d0rnqdje5dus739otukg-a.oregon-postgres.render.com',
  database: 'rolanesport',
  password: '2TTDT306KqbZsylAzdfqZMHcd3MHPYzR',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
