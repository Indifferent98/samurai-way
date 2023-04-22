import React from "react";
import "./index.css";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { stateType, store } from "./Redux/Redux-store";
const renderEntireTree = (state: stateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

//первая отрисовка
renderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  renderEntireTree(state);
}); //меняет callSubscriber в state
