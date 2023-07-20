import React, { useState, useEffect } from "react";
import { fetchEthereumData } from "../actions/ethereumActions.js";

const Ethereum = () => {
  const [ethereumValue, setEthereumValue] = useState(0);
  const [ethHourlyChange, setEthHourlyChange] = useState(0);
  const [ethDailyChange, setEthDailyChange] = useState(0);
  const [ethYearChange, setEthYearChange] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const ethereumData = await fetchEthereumData();

      if (ethereumData) {
        setEthereumValue(ethereumData.ethereumValue);
        setEthHourlyChange(ethereumData.ethHourlyChange);
        setEthDailyChange(ethereumData.ethDailyChange);
        setEthYearChange(ethereumData.ethYearChange);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-balances">
      <div className="crypto-balance">
        <img src="ethereum-icon.png" alt="Ethereum" />
        <p>Price: {ethereumValue}</p>
        <p>Change (1H) %: {ethHourlyChange}</p>
        <p>Change (24H) %: {ethDailyChange}</p>
        <p>Change (1Y) %: {ethYearChange}</p>
      </div>
    </div>
  );
};

export default Ethereum;
