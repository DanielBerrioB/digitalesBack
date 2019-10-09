const database = require("../utils/database.utils");

const addAulaQuery = "INSERT INTO aulas (id_aulas, description) VALUES (?, ?);";

function addAula(req, res) {
  let { id_aulas, description } = req.body;

  if (id_aulas && description) {
    database
      .query(addAulaQuery, [id_aulas, description])
      .then(result => {
        if (result) {
          res.status(201).send({
            message: "Se ingresó con éxito",
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

module.exports = {
  addAula
};
