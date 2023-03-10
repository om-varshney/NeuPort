import React from "react";
import ReactDOM from "react-dom/client";
import NeuPort from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <NeuPort />
  </Provider>
);
