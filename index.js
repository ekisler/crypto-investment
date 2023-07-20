const express = require("express");
const server = require("./src/server");

const PORT = process.env.PORT || 3005;

server.listen(PORT, () => {
  console.log(`Crypto Investment service listening on PORT ${PORT}`);
});
