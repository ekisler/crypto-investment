import React, { useState, useEffect } from "react";
import { fetchBitcoinData } from "../actions/bitcoinActions";

const Bitcoin = () => {
  const [bitcoinValue, setBitcoinValue] = useState(0);
  const [hourlyChange, setHourlyChange] = useState(0);
  const [dailyChange, setDailyChange] = useState(0);
  const [yearChange, setYearChange] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const bitcoinData = await fetchBitcoinData();

      if (bitcoinData) {
        setBitcoinValue(bitcoinData.bitcoinValue);
        setHourlyChange(bitcoinData.hourlyChange);
        setDailyChange(bitcoinData.dailyChange);
        setYearChange(bitcoinData.yearChange); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-balances">
      <div className="crypto-balance">
        <img src="bitcoin-icon.png" alt="Bitcoin" />
        <p>Price: {bitcoinValue}</p>
        <p>Change (1H) %: {hourlyChange}</p>
        <p>Change (24H) %: {dailyChange}</p>
        <p>Change (1Y) %: {yearChange}</p>
      </div>
    </div>
  );
};

export default Bitcoin;
