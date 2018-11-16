import React, { Component } from "react";

import DeliverooLogo from "../images/Deliveroo_logo.png";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo-image"
            src={DeliverooLogo}
            alt="Logo Deliveroo"
          />
        </div>
      </div>
    );
  }
}

export default Header;
