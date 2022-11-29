import React from "react";
import "./SideBar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import { SideBarData } from "./SideBarData";
import { NavLink } from "react-router-dom";
import DateTime from "./datetime/DateTime";

const activeStyle = {
  color: "#FE4460",
  backgroundColor: "#5932ea",
  borderRadius: "8px",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "21px",
  letterSpacing: "-0.01em",
  padding: "11px",
};

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <SettingsIcon className="sidebar-content-icon" />
        <h1 className="sidebar-title">Dashboard</h1>
      </div>
      <ul className="sidebar-list">
        {SideBarData.map((val, key) => {
          return (
            <NavLink
              key={key}
              className="sidebar-item"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={val.link}
            >
              <div className="sidebar-icon">{val.icon}</div>

              <div className="sidebar-subtitle">{val.title}</div>
            </NavLink>
          );
        })}
      </ul>

      <div className="sidebar-date">
        <DateTime />
      </div>
    </div>
  );
};

export default SideBar;
