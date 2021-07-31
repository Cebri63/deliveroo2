import React from "react";
import Logo from "./Logo";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="TopBar">
      <div className="TopBar--center">
        <Logo />
      </div>
    </div>
  );
};

export default TopBar;
