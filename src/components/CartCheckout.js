import React from "react";
import "./CartCheckout.css";

class CartCheckout extends React.Component {
  render() {
    if (!this.props.cart || this.props.cart.length === 0) {
      return null;
    }

    const products = [];

    console.log(this.props.cart);
    for (let i = 0; i < this.props.cart.length; i++) {
      products.push(
        <div className="products-and-price">
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

    let total = 0;

    for (let i = 0; i < this.props.cart.length; i++) {
      total =
        total + this.props.cart[i].quantity * Number(this.props.cart[i].price);
    }
    total = total + 2.5;

    return (
      <div className="cart">
        <ul>
          <li className="word-cart">Panier</li>
          <li className="products-cart">{products}</li>

          <div className="cart-price">
            <div className="subtotal">
              <li>Sous-total </li>
              <li>{(total - 2.5).toFixed(2)} € </li>
            </div>
            <div className="price-livraison">
              <li className="border-bottom-livraison">Frais de livraison</li>
              <li>2.50 €</li>
            </div>
            <div className="price-total">
              <li className="total">Total </li>
              <li>{total.toFixed(2)} €</li>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default CartCheckout;
