const express = require("express");
const cors = require("cors");
const bitcoinRouter = require("./routers/bitcoin") 
const ethereumRouter = require("./routers/ethereum")
const cardanoRouter = require("./routers/cardano") 

const server = express();
server.use(cors());

server.get("/api/bitcoin", bitcoinRouter);

server.get("/api/ethereum", ethereumRouter);

server.get("/api/cardano", cardanoRouter);

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});

server.use((err, req, res, next) => {
  res.status(err.statsCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
