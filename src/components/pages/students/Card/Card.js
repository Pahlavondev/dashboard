import React from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-user">
        <PeopleOutlineIcon />
      </div>
      <div className="card-content">
        <p className="card-title">Hamma o'quvchilar</p>
        <h2 className="card-number">125 ta</h2>
        <p className="card-text">
          <ArrowUpwardIcon /> 16%
          <span className="card-span">Oylik</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
