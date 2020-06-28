const { PORT = 5000 } = process.env;
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
server.use(bodyParser.json());

const morgan = require("morgan");
server.use(morgan("dev"));

const path = require("path");
server.use(express.static(path.join(__dirname, "build")));

const apiRouter = require("./api");
server.use("/api", apiRouter);

server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const { client } = require("./db");
client.connect();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
