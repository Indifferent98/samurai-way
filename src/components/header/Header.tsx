import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <header className={s.header}>
      <NavLink to="/Profile">
        <img
          className={s.headerLogo}
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png"
          alt=""
        />
      </NavLink>
    </header>
  );
};

export { Header };
