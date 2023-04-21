import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import store from "./store";
import Index from "views/Index.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";
const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
  transition: transitions.SCALE,
};
ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,

  document.getElementById("root")
);
