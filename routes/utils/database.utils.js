const poolConnection = require("../../database/connection");

/**
 * This function allows to query the database in order
 * to retrieve the data from it.
 * @param {String} sql
 * @param {Array} data
 */
function query(sql, data = []) {
  return new Promise((resolve, reject) => {
    poolConnection.getConnection((error, connection) => {
      if (error) {
        reject(error);
        return;
      }

      connection.query(sql, data, (error, result) => {
        connection.release();
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      });
    });
  });
}

module.exports = { query };
