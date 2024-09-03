const express = require("express");
require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const auth = require("./routes/auth");

const rooms = require("./routes/RoomRoute");
const messages = require("./routes/MessagesRoutes");
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
port = process.env.APP_PORT;

const currentDirectory = __dirname;
const buildDirectory = path.join(currentDirectory, "build");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: "*" }));

app.use(express.static(buildDirectory));

app.get("/", (req, res) => {
  res.send({ message: "Ok from the server side" });
});

app.use("/api/auth", auth);

app.use("/api/rooms", rooms);
app.use("/api/messages", messages);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("send_message", (messageData) => {
    console.log(`messageData ${JSON.stringify(messageData)}`)
    io.emit("new_message", messageData);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`my app is running on ${port}`);
});
