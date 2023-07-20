import React from "react";
const ExportButtons = ({ handleExportJSON, handleExportCSV }) => (
  <div className="export-buttons">
    <button onClick={handleExportCSV}>Export to CSV</button>
    <button onClick={handleExportJSON}>Export to JSON</button>
  </div>
);

export default ExportButtons;
