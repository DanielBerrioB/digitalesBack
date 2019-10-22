const express = require("express");
const router = express.Router();
const controller = require("./sensores.controller");

router.post("/sensores", controller.addSensor);
router.get("/sensores", controller.getAllSensors);
router.delete("/sensores/:id_sensores", controller.deleteSensor);

module.exports = router;
