const express = require("express");
const getBitcoinRouter = require("../controllers/bitcoin/getBitcoin")

const router = express.Router();

router.get("/api/bitcoin", getBitcoinRouter);

module.exports = router;
