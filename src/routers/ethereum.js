const express = require("express");
const getEthereumRouter = require("../controllers/ethereum/getEthereum")

const router = express.Router();

router.get("/api/ethereum", getEthereumRouter);

module.exports = router;
