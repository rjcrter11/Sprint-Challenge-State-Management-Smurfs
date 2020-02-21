import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

import { smurfReducer as reducer } from "./reducers";

import "./index.css";
import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
