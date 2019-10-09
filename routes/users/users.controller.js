const database = require("../utils/database.utils");
const crypto = require("crypto");
const { createToken } = require("../utils/auth");

const addUserQuery =
  "INSERT INTO usuarios (user_id, email, name, password) VALUES (?, ?, ?, ?);";

const authUserQuery =
  "SELECT * FROM usuarios WHERE email = ? AND password = ?;";

/**
 * This function adds a new user to the database.
 * It receives the user_id, email, name and password by
 * request body
 * @param {Request} req
 * @param {Response} res
 */
function addUser(req, res) {
  let { user_id, email, name, password } = req.body;
  if (user_id && email && name && password) {
    database
      .query(addUserQuery, [
        user_id,
        email,
        name,
        crypto.createHmac("sha256", password).digest("hex")
      ])
      .then(result => {
        if (result) {
          res.status(201).send({
            message: "Se insertó correctamente",
            status: true,
            data: result
          });
        } else {
          res.status(404).send({
            message: "No se inserto",
            status: false,
            data: []
          });
        }
      })
      .catch(error =>
        res.status(404).send({
          message: error,
          status: false,
          data: []
        })
      );
  } else {
    res.status(400).send({
      message: "No se han ingresado todos los datos",
      status: false,
      data: []
    });
  }
}

/**
 * This function auths an user with its email and password,
 * it returns a token if the credentilas are ok
 * @param {Request} req
 * @param {Response} res
 */
function authUser(req, res) {
  let { email, password } = req.body;

  if (email && password) {
    database
      .query(authUserQuery, [
        email,
        crypto.createHmac("sha256", password).digest("hex")
      ])
      .then(([result]) => {
        if (result) {
          let tokenKey = createToken({ ...result });
          res.status(200).send({
            message: "Usuario encontrado",
            status: true,
            data: result,
            token: tokenKey
          });
        } else {
          res.status(400).send({
            message: "No se encontró al usuario con las credenciales dadas",
            status: false,
            data: []
          });
        }
      })
      .catch(error =>
        res.status(400).send({
          message: error,
          status: false,
          data: []
        })
      );
  } else {
    res.status(400).send({
      message: "No se han ingresado todos los datos",
      status: false,
      data: []
    });
  }
}

module.exports = {
  addUser,
  authUser
};
