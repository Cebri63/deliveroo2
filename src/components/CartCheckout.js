import React from "react";
import "./CartCheckout.css";

class CartCheckout extends React.Component {
  render() {
    if (!this.props.cart || this.props.cart.length === 0) {
      return null;
    }

    const products = [];

    for (let i = 0; i < this.props.cart.length; i++) {
      products.push(
        <div key={i} className="products-and-price">
          <div>
            {this.props.cart[i].quantity} x {this.props.cart[i].label}{" "}
          </div>
          <div>
            {(this.props.cart[i].price * this.props.cart[i].quantity).toFixed(
              2
            )}{" "}
            €
          </div>
        </div>
      );
    }

    return (
      <div className="cart">
        <ul>
          <li className="word-cart">Panier</li>
          <li className="products-cart">{products}</li>

          <div className="cart-price">
            <div className="subtotal">
              <li>Sous-total </li>
              <li>{(this.props.total - 2.5).toFixed(2)} € </li>
            </div>
            <div className="price-livraison">
              <li className="border-bottom-livraison">Frais de livraison</li>
              <li>2.50 €</li>
            </div>
            <div className="price-total">
              <li className="total">Total </li>
              <li>{this.props.total.toFixed(2)} €</li>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default CartCheckout;
