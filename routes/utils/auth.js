const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "DIGITALES";

/**
 * This function creates the token in order to create credentials
 * and give credentials to the page
 * @param {Object} data
 */
function createToken(data = {}) {
  return jwt.sign(data, SECRET_KEY, { expiresIn: "2day" });
}

/**
 * Compares the given authorization by headers and returns a
 * response if is not valid, otherwise it continues with the request
 * @param {Request} req
 * @param {Response} res
 * @param {*} next
 */
async function validateToken(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(404).send({
      message: "No se encontró la autorización"
    });

  const isValid = await isValidToken(authorization);

  if (!isValid) return res.status(404).send({ message: "Token inválido" });
  next();
}

/**
 * Verify if the token is valid or not
 * @param {Token} token
 */
function isValidToken(token) {
  return new Promise(resolve => {
    jwt.verify(token, SECRET_KEY, err => {
      resolve(!err);
    });
  });
}

module.exports = {
  validateToken,
  createToken
};
