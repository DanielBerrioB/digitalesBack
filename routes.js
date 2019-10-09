const userRoutes = require("./routes/users");
const aulaRoutes = require("./routes/aulas");
const sensorRoutes = require("./routes/sensores");
const medicionRoutes = require("./routes/mediciones");

module.exports = app => {
  app.use(userRoutes);
  app.use(aulaRoutes);
  app.use(sensorRoutes);
  app.use(medicionRoutes);
};
