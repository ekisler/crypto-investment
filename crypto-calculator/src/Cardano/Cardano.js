import React, { useState, useEffect } from "react";
import { fetchCardanoData } from "../actions/cardanoActions";

const Cardano = () => {
  const [cardanoValue, setCardanoValue] = useState(0);
  const [cardanoHourlyChange, setCardanoHourlyChange] = useState(0);
  const [cardanoDailyChange, setCardanoDailyChange] = useState(0);
  const [cardanoYearChange, setCardanoYearChange] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const cardanoData = await fetchCardanoData();

      if (cardanoData) {
        setCardanoValue(cardanoData.cardanoValue);
        setCardanoHourlyChange(cardanoData.cardanoHourlyChange);
        setCardanoDailyChange(cardanoData.cardanoDailyChange);
        setCardanoYearChange(cardanoData.cardanoYearChange);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-balances">
      <div className="crypto-balance">
        <img src="cardano-icon.png" alt="Cardano" />
        <p>Price: {cardanoValue}</p>
        <p>Change (1H): {cardanoHourlyChange}</p>
        <p>Change (24H) %: {cardanoDailyChange}</p>
        <p>Change (1Y) %: {cardanoYearChange}</p>
      </div>
    </div>
  );
};

export default Cardano;
