import axios from "axios";

export const fetchEthereumData = async () => {
  try {
    const ethereumResponse = await axios.get(
      "http://localhost:3005/api/ethereum"
      );
    const ethereumData = ethereumResponse.data;

    return {
      ethereumValue: ethereumData.metrics.market_data.price_usd,
      ethHourlyChange: ethereumData.metrics.market_data.ohlcv_last_1_hour.open,
      ethDailyChange: ethereumData.metrics.market_data.percent_change_usd_last_24_hours,
      ethYearChange: ethereumData.metrics.roi_data.percent_change_last_1_year
    };
  } catch (error) {
    console.error("Error fetching Ethereum data:", error);
    return null;
  }
};

