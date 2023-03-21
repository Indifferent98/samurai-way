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
import { stateType } from "./Redux/state";

type AppPropsType = {
  appState: stateType;
};

function App(props: AppPropsType): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route
            path="/Dialogs"
            render={() => (
              <Dialogs
                messageData={props.appState.messageData}
                dialogsData={props.appState.dialogsData}
              />
            )}
          />
          <Route
            path="/Content"
            render={() => <Content myPostsData={props.appState.myPostsData} />}
          />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Settings" render={() => <Settings />} />
          <Route path="/News" render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
