import React from "react";
import s from "./nav.module.css";
import { NavLink } from "react-router-dom";
import { NavPropsType } from "./navContainer";

const Nav = (props: NavPropsType): JSX.Element => {
  const listNavBarItem = props.navBar.map((t, i) => {
    let link = "/";
    link += t;
    return (
      <NavLink
        key={i}
        to={link}
        activeClassName={s.activeLink}
        className={s.item}
      >
        {t}
      </NavLink>
    );
  });

  return <nav className={s.nav}>{listNavBarItem}</nav>;
};
export { Nav };
