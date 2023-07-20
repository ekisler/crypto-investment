const express = require("express");
const https = require("https");
require("dotenv").config();
const router = express.Router();
const API_KEY = process.env.API_KEY;

router.get("/api/cardano", (req, res) => {
  const options = {
    host: "data.messari.io",
    path: "/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd,metrics/market_data/ohlcv_last_1_hour/open,metrics/market_data/percent_change_usd_last_24_hours,metrics/roi_data/percent_change_last_1_week,metrics/roi_data/percent_change_last_1_year",
    headers: { "x-messari-api-key": API_KEY },
  };

  https
    .request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        const assetData = JSON.parse(data);
        const bitcoinData = assetData.data.find(
          (asset) => asset.symbol === "ADA"
        );
        res.json(bitcoinData);
      });
    })
    .end();
});

module.exports = router;
