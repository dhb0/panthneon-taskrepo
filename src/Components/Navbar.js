import React from "react";
import Logo from "../Images/dashboardImages/logo.png";
import dashboardMenuIcon from "../Images/dashboardImages/dashboardMenuIcon.png";

const Navbar = () => {
  return (
    <div className="app-nav text-center">
      <img src={Logo} className="logo" alt="dashboard logo" />
      <div className="menu-button">
        <img src={dashboardMenuIcon} className="menu-icon" alt="menu icon" />
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Navbar;
