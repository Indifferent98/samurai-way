import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/nav";
import { Content } from "./components/content/content";

function App(): JSX.Element {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
