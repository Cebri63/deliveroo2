import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: "/restaurant"
        }}
      >
        <p>Restaurant</p>
      </Link>
    );
  }
}

export default Home;
