import React from "react";
import "./nav.module.css";
const classes = { nav: "nav_nav__3Z1IF", item: "nav_item__fwMVs" };
const Nav = (): JSX.Element => {
  return (
    <nav className={classes.nav}>
      <a href="#" className={classes.item}>
        Profile
      </a>
      <a href="#" className={classes.item}>
        Messages
      </a>
      <a href="#" className={classes.item}>
        News
      </a>
      <a href="#" className={classes.item}>
        Music
      </a>
    </nav>
  );
};
export { Nav };
