import React from "react";
import ReactDOM from "react-dom";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/css/sb-admin.css";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
