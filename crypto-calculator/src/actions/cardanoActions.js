import axios from "axios";

export const fetchCardanoData = async () => {
  try {
    const cardanoResponse = await axios.get(
      "http://localhost:3005/api/cardano"
    );
    const cardanoData = cardanoResponse.data;

    return {
      cardanoValue: cardanoData.metrics.market_data.price_usd,
      cardanoHourlyChange: cardanoData.metrics.market_data.ohlcv_last_1_hour.open,
      cardanoDailyChange: cardanoData.metrics.market_data.percent_change_usd_last_24_hours,
      cardanoYearChange: cardanoData.metrics.roi_data.percent_change_last_1_year,
    };
  } catch (error) {
    console.error("Error fetching Cardano data:", error);
    return null;
  }
};

