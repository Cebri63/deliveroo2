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
          <div className="flex-cart">
            <button
              className="button-moins"
              onClick={() => {
                this.props.onDecrement(this.props.cart[i].id);
              }}
            >
              -
            </button>
            {this.props.cart[i].quantity}
            <button
              className="button-plus"
              onClick={() => {
                this.props.onIncrement(this.props.cart[i].id);
              }}
            >
              +
            </button>
            <div className="products-and-price">
              <div>{this.props.cart[i].label} </div>
              <div>
                {(
                  this.props.cart[i].price * this.props.cart[i].quantity
                ).toFixed(2)}{" "}
                €
              </div>
            </div>
          </div>
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

export default Cart;
