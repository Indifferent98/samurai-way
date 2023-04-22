import React from "react";
import "./index.css";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { stateType, store } from "./Redux/Redux-store";
const renderEntireTree = (store: any) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

//первая отрисовка
renderEntireTree(store);
store.subscribe(() => {
  const state = store.getState();
  renderEntireTree(store);
}); //меняет callSubscriber в state
