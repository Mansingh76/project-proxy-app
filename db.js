const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'aman',
    database: 'proxy_leave_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();
module.exports = pool;
