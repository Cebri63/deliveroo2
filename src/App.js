import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Restaurant from "./components/Restaurant";
import Checkout from "./components/Checkout";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Restaurant} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default App;
