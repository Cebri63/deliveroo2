import React from "react";
import Header from "./Header";
import "./Checkout.css";
import CartCheckout from "./CartCheckout";

class Checkout extends React.Component {
  state = {
    floor: "",
    code: "",
    adress: "",
    postalCode: "",
    city: "",
    phoneNumber: "",
    insctruction: ""
  };

  handleFloorChange = event => {
    this.setState({ floor: event.target.value });
  };

  handleCodeChange = event => {
    this.setState({ code: event.target.value });
  };

  handleAdressChange = event => {
    this.setState({ adress: event.target.value });
  };

  handlePostalCodeChange = event => {
    this.setState({ postalCode: event.target.value });
  };

  handleCityChange = event => {
    this.setState({ city: event.target.value });
  };

  handlePhoneNumberChange = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleInstructionChange = event => {
    this.setState({ insctruction: event.target.value });
  };

  handleSubmit = event => {
    console.log(this.state);

    event.preventDefault();
  };

  render() {
    // React Router va créer un objet this.props.location
    console.log(this.props.location.total);

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
              <form onSubmit={this.handleSubmit}>
                <div className="formulaire">
                  <label className="column half">
                    Etage et numéro d'appartement
                    <input
                      type="text"
                      placeholder="ex : Appartement n°15"
                      onChange={this.handleFloorChange}
                      value={this.state.floor}
                    />
                  </label>
                  <label className="column half">
                    Digicode
                    <input
                      type="text"
                      placeholder="ex : B123"
                      onChange={this.handleCodeChange}
                      value={this.state.code}
                    />
                  </label>
                  <label className="column all">
                    Adresse
                    <input
                      type="text"
                      placeholder="ex : 100 rue de Rivoli"
                      onChange={this.handleAdressChange}
                      value={this.state.adress}
                    />
                  </label>
                  <label className="column half">
                    Code postal
                    <input
                      type="text"
                      placeholder="ex : 75001"
                      onChange={this.handlePostalCodeChange}
                      value={this.state.postalCode}
                    />
                  </label>
                  <label className="column half">
                    Ville
                    <input
                      type="text"
                      placeholder="ex : Paris"
                      onChange={this.handleCityChange}
                      value={this.state.city}
                    />
                  </label>
                  <label className="column all">
                    Numéro de téléphone
                    <input
                      type="text"
                      placeholder="ex : +33 9 77 55 03 30"
                      onChange={this.handlePhoneNumberChange}
                      value={this.state.phoneNumber}
                    />
                  </label>
                  <label className="column all last-input">
                    Instructions pour votre livreur ?
                    <input
                      type="text"
                      placeholder="ex : C'est la porte noire près de l'animalerie. Merci d'appler lorsque vous êtes arrivez."
                      onChange={this.handleInstructionChange}
                      value={this.state.instruction}
                    />
                  </label>
                </div>

                <button className="confirm-button" type="submit">
                  Confirmer & payer
                </button>
              </form>
            </div>
          </div>
          <div>
            <CartCheckout cart={this.props.location.cart} />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
