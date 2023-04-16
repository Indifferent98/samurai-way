import React from "react";
import "./index.css";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./Redux/state";
const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(); //первая отрисовка
store.subscriber(renderEntireTree); //меняет callSubscriber в state
