import React from "react";
import "./nav.module.css";
import { NavLink } from "react-router-dom";
const s = { nav: "nav_nav__3Z1IF", item: "nav_item__fwMVs" };
const Nav = (): JSX.Element => {
  return (
    <nav className={s.nav}>
      <NavLink to="/Content" className={s.item}>
        Profile
      </NavLink>
      <NavLink to="/Dialogs" className={s.item}>
        Messages
      </NavLink>
      <NavLink to="/News" className={s.item}>
        News
      </NavLink>
      <NavLink to="/Music" className={s.item}>
        Music
      </NavLink>
      <NavLink to="/Settings" className={s.item}>
        Settings
      </NavLink>
    </nav>
  );
};
export { Nav };
