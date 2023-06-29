import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
  login: string;
  isAuth: boolean;
  photoUrl: string;
};

export const Header = (props: HeaderPropsType): JSX.Element => {
  return (
    <header className={s.header}>
      <NavLink to="/Profile">
        <img
          className={s.headerLogo}
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png"
          alt=""
        />
      </NavLink>

      <div className={s.loginBlock}>
        <div className={s.loginName}>
          {props.isAuth ? props.login : <NavLink to={"/Login"}> Login</NavLink>}
        </div>
        <div>
          <img className={s.userImg} src={props.photoUrl} alt="" />
        </div>
      </div>
    </header>
  );
};
