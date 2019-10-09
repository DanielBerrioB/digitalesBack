const express = require("express");
const router = express.Router();
const controller = require("./sensores.controller");

router.post("/sensores", controller.addSensor);

module.exports = router;
