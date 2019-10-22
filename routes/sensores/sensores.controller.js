const database = require("../utils/database.utils");

const addSensorQuery =
  "INSERT INTO sensores (id_sensores, type, description) VALUES (?, ?, ?);";

const getAllSensorsQuery = "SELECT id_sensores from sensores;";

const deleteSensorQuery = "DELETE FROM sensores WHERE id_sensores = ?;";

const deleteSensorCascadeQuery =
  "DELETE FROM mediciones WHERE id_sensores = ?;";

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

function getAllSensors(req, res) {
  database
    .query(getAllSensorsQuery, [])
    .then(result => {
      if (result) {
        res.status(200).send({
          message: "Datos",
          status: true,
          data: result
        });
      } else {
        res.status(400).send({
          message: "Error intenta mas tarde",
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

function deleteSensor(req, res) {
  let { id_sensores } = req.params;
  if (id_sensores) {
    database
      .query(deleteSensorCascadeQuery, [id_sensores])
      .then(result => {
        if (result) {
          database
            .query(deleteSensorQuery, [id_sensores])
            .then(result => {
              if (result) {
                res.status(200).send({
                  message: "Eliminado éxitosamente",
                  status: true,
                  data: result
                });
              } else {
                res.status(400).send({
                  message: "Error intenta mas tarde",
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
            message: "Error intenta mas tarde",
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
      message: "Faltan campos por ingresar",
      status: false,
      data: []
    });
  }
}

module.exports = {
  addSensor,
  getAllSensors,
  deleteSensor
};
