import "./index.css";

import { state, subscriber } from "./Redux/state";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { addMessage, addPost, stateType } from "./Redux/state";

const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={state} addPost={addPost} addMessage={addMessage} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
renderEntireTree();
subscriber(renderEntireTree);
