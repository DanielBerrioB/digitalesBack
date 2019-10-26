const app = require("./app");
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);

const port = 9090 || process.env.PORT;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.locals.socketIo = io;
