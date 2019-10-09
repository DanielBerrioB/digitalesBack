const mysql = require("mysql");
const { pool } = require("../config/database");

const poolConnection = mysql.createPool(pool);

module.exports = poolConnection;
