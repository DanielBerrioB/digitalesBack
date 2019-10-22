const database = require("../utils/database.utils");

const addMedicionQuery =
  "INSERT INTO mediciones (id_sensores, id_aulas, date, value, description, battery_level) VALUES (?, ?, ?, ?, ?, ?);";

const getAllMedicionQuery = "SELECT * FROM mediciones";

/**
 * Gets all the data from mediciones table
 * @param {Request} req
 * @param {Response} res
 */
function getAllMedicion(req, res) {
  database
    .query(getAllMedicionQuery, [])
    .then(result => {
      if (result) {
        res.status(200).send({
          message: "Datos",
          status: true,
          data: result,
        });
      } else {
        res.status(400).send({
          message: "Hubo un error intenta mas tarde",
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
}

/**
 * This function adds a new medicion given some
 * parameters by request body
 * @param {Request} req
 * @param {Response} res
 */
function addMedicion(req, res) {
  let {
    id_sensores,
    id_aulas,
    date,
    value,
    description,
    battery_level
  } = req.body;

  if (
    id_sensores &&
    id_aulas &&
    date &&
    value &&
    description &&
    battery_level
  ) {
    database
      .query(addMedicionQuery, [
        id_sensores,
        id_aulas,
        date,
        value,
        description,
        battery_level
      ])
      .then(result => {
        if (result) {
          res.status(201).send({
            message: "Se agregó con éxito",
            status: true,
            data: result
          });
        } else {
          res.status(401).send({
            message: "Hubo un error intenta mas tarde",
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
  addMedicion,
  getAllMedicion
};
