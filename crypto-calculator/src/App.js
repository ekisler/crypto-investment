import React, { useState } from "react";
import { saveAs } from "file-saver";
import CryptoTable from "./CryptoTable/CryptoTable";
import Bitcoin from "./Bitcoin/Bitcoin";
import Cardano from "./Cardano/Cardano";
import Ethereum from "./Ethereum/Ethereum";
import ExportButtons from "./ExportButtons/ExportButtons";

import "./App.css";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [cryptoData, setCryptoData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const handleInputChange = (event) => {
    setBalance(event.target.value);
  };

  const handleExportJSON = () => {
    if (cryptoData.length === 0) {
      alert("No data available. Please load data first.");
      return;
    }

    const jsonData = JSON.stringify(cryptoData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "crypto_data.json";
    link.click();
  };

const handleExportCSV = () => {
  if (cryptoData.length === 0) {
    alert("No data available. Please load data first.");
    return;
  }

  const csvContent =
    "Cryptocurrency, Monthly Return, Investment\n" +
    cryptoData
      .map(
        (item) =>
          `${item.crypto}, ${item.balance.toFixed(2)}, ${item.investment}`
      )
      .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "crypto_data.csv";
  link.click();
};

 const handleLoadData = () => {
  

   setDataLoaded(true);
 };

  return (
    <div className="App">
      <h1>Crypto Investment App</h1>
      <div className="balance">
        <div className="crypto-balances">
          <Bitcoin />
          <Ethereum />
          <Cardano />
        </div>
        <div>
          <label htmlFor="balance">Enter investment amount: </label>
          <input
            type="number"
            id="balance"
            name="balance"
            value={balance}
            onChange={handleInputChange}
          />
          <CryptoTable
            balance={balance}
            cryptoData={cryptoData}
            setCryptoData={setCryptoData}
            setDataLoaded={setDataLoaded}
          />
          <div>
            <button onClick={handleLoadData}>Load Data</button>
            <button onClick={handleExportJSON}>Export as JSON</button>
            <button onClick={handleExportCSV}>Export as CSV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
