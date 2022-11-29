import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./GroupCard.css";

const w = 70; // backenddan keladi

const GroupCard = () => {
  return (
    <div className="groupcard">
      <div className="groupcard-top">
        <p className="groupcard-text">December 20, 2022</p>
        <MoreVertIcon className="groupcard-icon" />
      </div>

      <h2 className="groupcard-title">Frontent 010</h2>
      <p className="groupcard-subtitle">O'quvchilar soni : 6</p>

      <div className="groupcard-wrapper-learn">
        <h3 className="groupcard-learn">O'rtacha o'zlashtirish</h3>
        <div className="groupcard-contect">
          <span
            style={{ width: `${w}%` }}
            className="groupcard-contect-span"
          ></span>
        </div>
        <div className="groupcard-learn-prosent">
          <b>{w}%</b>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
