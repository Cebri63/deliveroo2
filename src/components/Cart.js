import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    if (this.props.cart.length === 0) {
      return null;
    }

    const products = [];

    console.log(this.props.cart);
    for (let i = 0; i < this.props.cart.length; i++) {
      products.push(
        <li className="cart-items" key={this.props.cart[i].id}>
          <button
            className="button-plus-moins"
            onClick={() => {
              this.props.onDecrement(this.props.cart[i].id);
            }}
          >
            -
          </button>
          {this.props.cart[i].quantity}
          <button
            className="button-plus-moins"
            onClick={() => {
              this.props.onIncrement(this.props.cart[i].id);
            }}
          >
            +
          </button>
          {this.props.cart[i].label}{" "}
          <span>
            {(this.props.cart[i].price * this.props.cart[i].quantity).toFixed(
              2
            )}{" "}
            €
          </span>
        </li>
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
        <Link
          to={{
            pathname: "/checkout",

            cart: this.props.cart // le tableau des produits
            // transmettre des variables
          }}
        >
          <button className="cart-validation">Valider mon panier</button>
        </Link>

        <ul>
          <li className="products-cart">{products}</li>
          <hr />
          <div className="cart-price">
            <li>Sous-total {(total - 2.5).toFixed(2)} € </li>
            <li>Frais de livraison 2.50 €</li>
            <hr />
            <li className="total">Total {total.toFixed(2)} €</li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Cart;
