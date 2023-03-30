import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { addMessage, addPost, stateType } from "./Redux/state";

export const renderEntireTree = (state: stateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={state} addPost={addPost} addMessage={addMessage} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
