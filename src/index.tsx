import React from "react";

import "./index.css";

import { state } from "./Redux/state";

import { renderEntireTree } from "./Render";

// ReactDOM.render(
//   <BrowserRouter>
//     <App appState={state} addPost={addPost} />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

renderEntireTree(state);
