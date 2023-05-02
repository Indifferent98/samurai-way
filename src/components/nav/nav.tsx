import React from "react";
import s from "./nav.module.css";
import { NavLink } from "react-router-dom";
// const s = { nav: "nav_nav__3Z1IF", item: "nav_item__fwMVs" };
type NavPropsType = {
  navBar: string[];
};

const Nav = (props: NavPropsType): JSX.Element => {
  const listNavBarItem = props.navBar.map((t, i) => {
    let link = "/";
    link += t;
    return (
      <NavLink to={link} activeClassName={s.activeLink} className={s.item}>
        {t}
      </NavLink>
    );
  });

  return (
    <nav className={s.nav}>
      {listNavBarItem}
      {/* <NavLink to="/Dialogs" activeClassName={s.activeLink} className={s.item}>
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
      </NavLink> */}
    </nav>
  );
};
export { Nav };
