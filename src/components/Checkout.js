import React from "react";
import Header from "./Header";
import "./Checkout.css";
import { Elements } from "react-stripe-elements";
import CartCheckout from "./CartCheckout";
import CheckoutForm from "./CheckoutForm";

class Checkout extends React.Component {
  render() {
    // React Router va créer un objet this.props.location
    let total = 0;
    if (this.props.location.cart) {
      for (let i = 0; i < this.props.location.cart.length; i++) {
        total =
          total +
          this.props.location.cart[i].quantity *
            Number(this.props.location.cart[i].price);
      }
      total = total + 2.5;
    }

    return (
      <div className="checkout-container">
        <div>
          <Header />
        </div>

        <div className="form-and-checkout">
          <div>
            <div className="back-color">
              <h2>Le Pain Quotidien - Montorgueil</h2>
              <h3>Adresse de livraison</h3>
              <Elements>
                <CheckoutForm total={total} />
              </Elements>
            </div>
          </div>
          <div>
            <CartCheckout cart={this.props.location.cart} total={total} />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
