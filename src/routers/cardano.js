const express = require("express");
const getCardanoRouter = require("../controllers/cardano/getCardano")

const router = express.Router();
router.get("/api/cardano", getCardanoRouter);

module.exports = router;
