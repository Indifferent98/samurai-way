import React from "react";
import "./index.css";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { stateType, store } from "./Redux/Redux-store";
import { Provider } from "react-redux";

// Добавить провайдера
const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        {/* <StoreContext.Provider value={store}> */}
        <App />
        {/* </StoreContext.Provider> */}
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

//первая отрисовка
renderEntireTree();
store.subscribe(() => {
  // const state = store.getState();
  renderEntireTree();
}); //меняет callSubscriber в state
