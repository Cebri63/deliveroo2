import React, { Component } from "react";

import "./RestaurantDescription.css";

class RestaurantDescription extends Component {
  render() {
    return (
      <div>
        <div className="description-container">
          {/* Titre et description */}
          <div className="title-description">
            <h3>{this.props.name}</h3>
            <p className="description-text">{this.props.description}</p>
          </div>
          {/* Image */}
          <div className="image-container">
            <img src={this.props.imageUrl} alt="restaurant" />
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantDescription;
