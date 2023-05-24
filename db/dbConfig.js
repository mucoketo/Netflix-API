const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "JT88dtAc89Ca%!#",
  database: "netflix",
  port: 3306,
});

global.db = pool.promise();
