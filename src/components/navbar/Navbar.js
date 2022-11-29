import React from "react";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <h2 className="navbar-title">Salom Sheroz 👋🏼,</h2>

        <div className="navbar-icons">
          <NightlightIcon className="navbar-icon" />
          <AddCircleIcon className="navbar-icon" />
          <NotificationsNoneIcon className="navbar-icon" />

          <div className="navbar-content">
            <SearchIcon className="navbar-content-icon" />
            <input
              className="navbar-search"
              type="text"
              placeholder="Qidiruv"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
