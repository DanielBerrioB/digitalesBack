const express = require("express");
const router = express.Router();
const controller = require("./users.controller");

//User post
router.post("/user", controller.addUser);

router.post("/userAuth", controller.authUser);

module.exports = router;
