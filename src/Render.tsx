import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { stateType } from "./Redux/state";

export const renderEntireTree = (props: stateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={props} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
