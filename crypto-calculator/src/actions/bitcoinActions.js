import axios from "axios";

export const fetchBitcoinData = async () => {
  try {
    const bitcoinResponse = await axios.get(
      "http://localhost:3005/api/bitcoin"
    );
    const bitcoinData = bitcoinResponse.data;

    return {
      bitcoinValue: bitcoinData.metrics.market_data.price_usd,
      hourlyChange: bitcoinData.metrics.market_data.ohlcv_last_1_hour.open,
      dailyChange:  bitcoinData.metrics.market_data.percent_change_usd_last_24_hours,
      yearChange: bitcoinData.metrics.roi_data.percent_change_last_1_year,
    };
  } catch (error) {
    console.error("Error fetching Bitcoin data:", error);
    return null;
  }
};
