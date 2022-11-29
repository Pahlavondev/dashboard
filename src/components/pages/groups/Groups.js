import React from "react";
import Card from "../students/Card/Card";
import GroupCard from "./groupcard/GroupCard";
import "./Groups.css";

const Groups = () => {
  return (
    <div className="groups-wrapper">
      <div className="groups-cards">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="groups-content">
        <div className="groups-header">
          <div className="groups-header-top">
            <h2 className="groups-title">Guruhlar</h2>
            <p className="groups-header-text">Oktabr, 27</p>
          </div>

          <ul className="groups-list">
            <li className="groups-item">
              <span className="groups-span">7</span>
              <p className="groups-text">Faol Guruhlar</p>
            </li>

            <li className="groups-item">
              <span className="groups-span">2</span>
              <p className="groups-text">Tugatgan guruh</p>
            </li>

            <li className="groups-item">
              <span className="groups-span">9</span>
              <p className="groups-text">Umumiy guruh</p>
            </li>
          </ul>
        </div>
        <div className="groups-body">
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
      </div>
    </div>
  );
};

export default Groups;
