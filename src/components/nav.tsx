import React from "react";
import "./nav.css";
const Nav = (): JSX.Element => {
  return (
    <nav className="nav">
      <a href="#" className="item">
        Profile
      </a>
      <a href="#" className="item">
        Messages
      </a>
      <a href="#" className="item">
        News
      </a>
      <a href="#" className="item">
        Music
      </a>
    </nav>
  );
};
export { Nav };
