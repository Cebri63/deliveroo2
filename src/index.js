import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { StripeProvider } from "react-stripe-elements";

ReactDOM.render(
  <StripeProvider apiKey="pk_test_5z9rSB8XwuAOihoBixCMfL6X">
    <App />
  </StripeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
