const express = require("express");
const router = express.Router();
const path = require("path");
const controller = require("./users.controller");

router.get("/user", controller.addUser);

module.exports = router;
