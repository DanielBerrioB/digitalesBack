const app = require("./app");

const port = 9090 || process.env.PORT;

app.listen(port, () => {
  console.log("Server running on port");
});
