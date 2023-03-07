import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Nav } from "./components/nav";
import { Content } from "./components/content";

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
