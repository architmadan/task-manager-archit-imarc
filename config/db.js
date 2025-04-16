const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "architmadan@8",
    database: "task_manager",
  })
  .promise();

module.exports = pool;
