import React from "react";
import "./Header.module.css";

const classes = {
  header: "Header_header__k2I3s ",
  headerLogo: "Header_headerLogo__yjqCZ",
};
const Header = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <img
        className={classes.headerLogo}
        src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png"
        alt=""
      />
    </header>
  );
};

export { Header };
