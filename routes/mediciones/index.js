const express = require("express");
const router = express.Router();
const controller = require("./mediciones.controller");

router.post("/mediciones", controller.addMedicion);
router.get("/mediciones", controller.getAllMedicion);
router.get("/health", (req, res) => res.status(200).send("Alejo")); 

module.exports = router;
