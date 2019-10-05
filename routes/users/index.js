const express = require("express");
const router = express.Router();
const controller = require("./users.controller");

router.get("/user", controller.addUser);

module.exports = router;
