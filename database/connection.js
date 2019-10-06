const mysql = require("mysql");
const { pool } = require("../config/database");

var con = mysql.createConnection(pool);

con.connect(err => {
  if (err) throw err;
  console.log("Connected");
});

const poolConnection = mysql.createPool(pool);

module.exports = poolConnection;
