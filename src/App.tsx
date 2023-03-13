import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/nav";
import { Content } from "./components/content/content";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { News } from "./components/News/News";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/Dialogs" component={Dialogs}></Route>
          <Route path="/Content" component={Content}></Route>
          <Route path="/Music" component={Music}></Route>
          <Route path="/Settings" component={Settings}></Route>
          <Route path="/News" component={News}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
