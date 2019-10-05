const express = require("express");
const app = express();

const confExpress = require("./config/express");
const setupRoutes = require("./routes");

confExpress(app);
setupRoutes(app);

module.exports = app;
