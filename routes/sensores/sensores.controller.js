const database = require("../utils/database.utils");

const addSensorQuery =
  "INSERT INTO sensores (id_sensores, type, description) VALUES (?, ?, ?);";

function addSensor(req, res) {
  let { id_sensores, type, description } = req.body;
  if (id_sensores && type && description) {
    database
      .query(addSensorQuery, [id_sensores, type, description])
      .then(result => {
        if (result) {
          res.status(201).send({
            message: "Se agregó con éxito",
            status: true,
            data: result
          });
        } else {
          res.status(404).send({
            message: "Hubo un error intenta mas tarde",
            status: false,
            data: []
          });
        }
      });
  } else {
    res.status(400).send({
      message: "No se han ingresado todos los datos",
      status: false,
      data: []
    });
  }
}

module.exports = {
  addSensor
};
