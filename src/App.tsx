import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/nav";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { News } from "./components/News/News";
import { dispatchActionTypes } from "./Redux/Redux-store";

import { Profile } from "./components/Profile/Profile";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

import { NavContainer } from "./components/nav/navContainer";

function App(): JSX.Element {
  return (
    <div className="app-wrapper">
      <Header />
      <NavContainer />
      <div className="app-wrapper-Profile">
        <Route path="/Messages" render={() => <DialogsContainer />} />
        <Route path="/Profile" render={() => <Profile />} />
        <Route path="/Music" render={() => <Music />} />

        <Route path="/Settings" render={() => <Settings />} />
        <Route path="/News" render={() => <News />} />
      </div>
    </div>
  );
}

export default App;
