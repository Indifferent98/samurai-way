import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/nav";
import { Content } from "./components/content/content";
import { Dialogs } from "./components/Dialogs/Dialogs";

function App(): JSX.Element {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      {/* <Content /> */}
      <Dialogs />
    </div>
  );
}

export default App;
