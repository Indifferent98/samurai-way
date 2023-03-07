import React from "react";
import "./Header.css";
const Header = (): JSX.Element => {
  return (
    <header className="header">
      <img
        className="headerLogo"
        src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png"
        alt=""
      />
    </header>
  );
};

export { Header };
