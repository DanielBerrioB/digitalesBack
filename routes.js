const userRoutes = require("./routes/users");

module.exports = app => {
  app.use(userRoutes);
};
