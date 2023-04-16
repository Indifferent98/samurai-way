import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/nav";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { News } from "./components/News/News";
import { dispatchActionTypes, stateType } from "./Redux/state";
import { Profile } from "./components/Profile/Profile";

type AppPropsType = {
  appState: stateType;
  dispatch: (action: dispatchActionTypes) => void;
};

function App(props: AppPropsType): JSX.Element {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav list={props.appState.navBar} />
      <div className="app-wrapper-Profile">
        <Route
          path="/Messages"
          render={() => (
            <Dialogs
              dispatch={props.dispatch}
              newMessageToMessagesTitle={
                props.appState.messagesPage.newMessageToMessagesTitle
              }
              state={props.appState.messagesPage}
            />
          )}
        />
        <Route
          path="/Profile"
          render={() => (
            <Profile
              dispatch={props.dispatch}
              newPostProfileTitle={
                props.appState.profilePage.newPostProfileTitle
              }
              myPostsData={props.appState.profilePage.myPostsData}
            />
          )}
        />
        <Route path="/Music" render={() => <Music />} />
        <Route path="/Settings" render={() => <Settings />} />
        <Route path="/News" render={() => <News />} />
      </div>
    </div>
  );
}

export default App;
