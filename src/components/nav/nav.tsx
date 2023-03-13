import React from "react";
import s from "./nav.module.css";
import { NavLink } from "react-router-dom";
// const s = { nav: "nav_nav__3Z1IF", item: "nav_item__fwMVs" };
const Nav = (): JSX.Element => {
  return (
    <nav className={s.nav}>
      <NavLink to="/Content" activeClassName={s.activeLink} className={s.item}>
        Profile
      </NavLink>
      <NavLink to="/Dialogs" activeClassName={s.activeLink} className={s.item}>
        Messages
      </NavLink>
      <NavLink to="/News" activeClassName={s.activeLink} className={s.item}>
        News
      </NavLink>
      <NavLink to="/Music" activeClassName={s.activeLink} className={s.item}>
        Music
      </NavLink>
      <NavLink to="/Settings" activeClassName={s.activeLink} className={s.item}>
        Settings
      </NavLink>
    </nav>
  );
};
export { Nav };
