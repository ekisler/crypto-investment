import React, { useState, useEffect } from "react";
import "./CryptoTable.css";

const CryptoTable = ({ balance }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const cryptocurrencyData = {
    bitcoin: { name: "Bitcoin", percentage: 5, icon: "bitcoin-icon.png" },
    ethereum: { name: "Ethereum", percentage: 4.1, icon: "ethereum-icon.png" },
    cardano: { name: "Cardano", percentage: 1, icon: "cardano-icon.png" },
  };

  useEffect(() => {
    const calculateBalance = () => {
      const calculatedCryptoData = Object.entries(cryptocurrencyData).map(
        ([crypto, data]) => ({
          crypto: data.name,
          balance: (balance * data.percentage) / 100,
          investment: balance,
          icon: data.icon,
        })
      );
      setCryptoData(calculatedCryptoData);
    };

    calculateBalance();
  }, [balance]);

  return (
    <div>
      <h3>Investment Results</h3>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Investment</th>
            <th>Monthly Return</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((data, index) => (
            <tr key={index}>
              <td>
                <img
                  src={`images/${data.icon}`}
                  alt={`${data.crypto} Icon`}
                  width="20"
                  height="20"
                />
                {data.crypto}
              </td>
              <td>${data.investment}</td>
              <td>${data.balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
