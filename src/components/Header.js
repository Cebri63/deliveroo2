import React, { Component } from "react";

import DeliverooLogo from "../images/Deliveroo_logo.png";

import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo-container">
            <img
              className="logo-image"
              src={DeliverooLogo}
              alt="Logo Deliveroo"
            />
          </div>
        </Link>
      </div>
    );
  }
}

export default Header;
