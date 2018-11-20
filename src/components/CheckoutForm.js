import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

const style = {
  base: {
    color: "#32325d",
    lineHeight: "18px",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4"
    },
    border: "solid 1px #333333"
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

class CheckoutForm extends Component {
  handleSubmit = event => {
    // On empêche le formulaire d'être envoyé grâce à `event.preventDefault();`
    event.preventDefault();
    // On utilise la fonction createToken pour envoyer la demande de Tokenization à Stripe
    this.props.stripe
      .createToken({
        name: "Xavier Colombel",
        address_line1: "42, rue des Orteaux"
      })
      .then(({ token }) => {
        console.log("Token:", token);
        // On poste l'objet Token à notre back-end
        axios
          .post("https://3c7a38be.ngrok.io/api", {
            token,
            total: this.props.total
          })
          .then(function(response) {
            if (response.data.status === "succeeded") {
              alert("Votre commande a bien été prise en compte !");
            }

            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
  };

  state = {
    floor: "",
    code: "",
    adress: "",
    postalCode: "",
    city: "",
    phoneNumber: "",
    insctruction: ""
  };

  handleChange(e, key) {
    this.setState(
      {
        [key]: e.target.value
      },
      () => console.log(this.state)
    );
  }

  render() {
    return (
      <form className="checkout-form" onSubmit={this.handleSubmit}>
        <div style={{ width: "100%" }}>
          <div className="formulaire">
            <label className="column half">
              Etage et numéro d'appartement
              <input
                type="text"
                placeholder="ex : Appartement n°15"
                onChange={e => this.handleChange(e, "floor")}
                value={this.state.floor}
              />
            </label>
            <label className="column half">
              Digicode
              <input
                type="text"
                placeholder="ex : B123"
                onChange={e => this.handleChange(e, "code")}
                value={this.state.code}
              />
            </label>
            <label className="column all">
              Adresse
              <input
                type="text"
                placeholder="ex : 100 rue de Rivoli"
                onChange={e => this.handleChange(e, "adress")}
                value={this.state.adress}
              />
            </label>
            <label className="column half">
              Code postal
              <input
                type="text"
                placeholder="ex : 75001"
                onChange={e => this.handleChange(e, "postalCode")}
                value={this.state.postalCode}
              />
            </label>
            <label className="column half">
              Ville
              <input
                type="text"
                placeholder="ex : Paris"
                onChange={e => this.handleChange(e, "city")}
                value={this.state.city}
              />
            </label>
            <label className="column all">
              Numéro de téléphone
              <input
                type="text"
                placeholder="ex : +33 9 77 55 03 30"
                onChange={e => this.handleChange(e, "phoneNumber")}
                value={this.state.phoneNumber}
              />
            </label>
            <label className="column all last-input">
              Instructions pour votre livreur ?
              <input
                type="text"
                placeholder="ex : C'est la porte noire près de l'animalerie. Merci d'appler lorsque vous êtes arrivez."
                onChange={e => this.handleChange(e, "instruction")}
                value={this.state.instruction}
              />
            </label>
          </div>

          <div
            style={{
              border: "solid 2px #D3D3D3",
              padding: 10,
              borderRadius: 3,
              margin: 20
            }}
          >
            <CardElement style={style} />
          </div>

          <button className="confirm-button" type="submit">
            Confirmer & payer
          </button>
        </div>
      </form>
    );
  }
}
// On injecte les fonctionnalités de Stripe dans CheckoutForm grâce à la logique de High Order Component (HOC)
export default injectStripe(CheckoutForm);
