import React from "react";
import "./Dashboard.css";
import Statistic from "./Chart1/Statistic";
import Pupils from "./Chart2/Pupils";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="chart-wrapper">
        <div className="chart-content">
          <h2 className="chart-title">Yillik Statistika</h2>
          <select className="chart-select">
            <option className="chart-value" value="yillar">
              Yillar
            </option>
            <option className="chart-value" value="oylar">
              Oylar
            </option>
            <option className="chart-value" value="kunlar">
              Kunlar
            </option>
          </select>
        </div>
        <Statistic />
      </div>

      <div className="pupils-wrapper">
        <div className="pupils-content">
          <h2 className="pupils-title">O'quvchilar</h2>
          <p className="pupils-text">Guruhdagi o'quchilar guruhi </p>
        </div>
        <Pupils />
      </div>
    </div>
  );
};

export default Dashboard;
