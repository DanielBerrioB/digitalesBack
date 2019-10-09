const express = require("express");
const router = express.Router();
const controller = require("./aulas.controller");

router.post("/aulas", controller.addAula);

module.exports = router;
