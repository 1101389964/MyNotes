import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Context } from "./utils/connect";
import store from "./store";

ReactDOM.render(
  <Context.Provider value={store}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
