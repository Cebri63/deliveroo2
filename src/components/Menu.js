import React, { Component } from "react";

import MenuSection from "./MenuSection";
import Cart from "./Cart";
import "./Menu.css";

class Menu extends Component {
  render() {
    let menuSectionsComponents = [];
    const entries = Object.entries(this.props.menu);
    for (let i = 0; i < entries.length; i++) {
      if (entries[i][1].length > 0) {
        menuSectionsComponents.push(
          <MenuSection
            addItem={this.props.addItem}
            key={i}
            label={entries[i][0]}
            menuItems={entries[i][1]}
          />
        );
      }
    }

    return (
      <div className="menu-background">
        <div className="menu">
          <div className="menu-components">{menuSectionsComponents}</div>

          <div>
            <Cart
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              cart={this.props.cart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
