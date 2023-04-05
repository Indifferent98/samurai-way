import React from "react";
import "./index.css";
import { state, stateType, subscriber } from "./Redux/state";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addMessage, addPost } from "./Redux/state";

const renderEntireTree = (state: stateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={state} addPost={addPost} addMessage={addMessage} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(state); //первая отрисовка
subscriber(renderEntireTree); //меняет entireTree в state
