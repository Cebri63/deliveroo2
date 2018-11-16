import React, { Component } from "react";

import "./MenuItem.css";

class MenuItem extends Component {
  renderPopular(isPopular) {
    if (isPopular) {
      return <span className="card-popular">★ Populaire</span>;
    } else {
      return null;
    }
  }

  renderImage(url) {
    if (url) {
      return <img src={this.props.imageUrl} alt="meal" />;
    } else {
      return null;
    }
  }
  render() {
    const cardDescription =
      this.props.description.length > 150
        ? this.props.description.substring(0, 150) + "..."
        : this.props.description;
    return (
      <div
        className="item-card"
        onClick={() => {
          this.props.addItem(this.props.id, this.props.label, this.props.price);
        }}
      >
        <div className="card-content">
          <h6 className="card-label">{this.props.label}</h6>
          <p className="card-description">{cardDescription}</p>
          <div className="price-popular-container">
            <span className="card-price">{this.props.price}€</span>
            {this.renderPopular(this.props.popular)}
          </div>
        </div>
        <div className="meal-image-container">
          {this.renderImage(this.props.imageUrl)}
        </div>
      </div>
    );
  }
}

export default MenuItem;
