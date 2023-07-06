import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import unknowImage from "./../../assets/unknownImage.jpg";
import { setAuthChangeProfile } from "../../Redux/AuthReducer";
import { useDispatch } from "react-redux";

type HeaderPropsType = {
  login: string;
  isAuth: boolean;
  photoUrl: string;
};

export const Header = (props: HeaderPropsType): JSX.Element => {
  // const dispatch = useDispatch();
  // const authLoginClickHandler = () => {
  //   dispatch(setAuthChangeProfile());
  // };
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
          {props.isAuth ? (
            props.login
          ) : (
            <NavLink to={"/Login"}>
              <span /*</NavLink>onClick={authLoginClickHandler}*/>Login</span>
            </NavLink>
          )}
        </div>
        <div>
          <img
            className={s.userImg}
            src={props.photoUrl ? props.photoUrl : unknowImage}
            alt=""
          />
        </div>
      </div>
    </header>
  );
};
