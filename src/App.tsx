import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { News } from "./components/News/News";

import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

import { NavContainer } from "./components/nav/navContainer";

import { ProfileContainer } from "./components/Profile/ProfileInfo/ProfileContainer";
import { HeaderContainer } from "./components/header/HeaderContainer";
import { UsersContainter } from "./components/Users/UsersContainer";
import { Login } from "./components/Login/LoginPage";

function App(): JSX.Element {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavContainer />
      <div className="app-wrapper-Profile">
        <Route path="/Messages" render={() => <DialogsContainer />} />
        <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/Music" render={() => <Music />} />
        <Route path="/Settings" render={() => <Settings />} />
        <Route path="/News" render={() => <News />} />
        <Route path="/Users" render={() => <UsersContainter />} />
        <Route path="/Login" render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
