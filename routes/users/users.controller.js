const database = require("../utils/database.utils");

function addUser(req, res) {
  res.status(200).send("Este mensaje");
}

module.exports = {
  addUser
};
