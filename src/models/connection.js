const mysql = require('mysql2/promise');
/* require('dotenv').config(); */

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: '3306',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'StoreManager',
  waitForConnections: 10,
 /*  connectionLimit: process.env.MYSQL_CONNECTION_LIMIT, */
  queueLimit: 0,
});

module.exports = connection;