import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/nav";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { News } from "./components/News/News";
import { dispatchActionTypes, stateType } from "./Redux/Redux-store";

import { Profile } from "./components/Profile/Profile";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
  store: any;
};

function App(props: AppPropsType): JSX.Element {
  const state = props.store.getState();
  return (
    <div className="app-wrapper">
      <Header />
      <Nav list={state.navBar} />
      <div className="app-wrapper-Profile">
        <Route
          path="/Messages"
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route path="/Profile" render={() => <Profile store={props.store} />} />
        <Route path="/Music" render={() => <Music />} />

        <Route path="/Settings" render={() => <Settings />} />
        <Route path="/News" render={() => <News />} />
      </div>
    </div>
  );
}

export default App;
