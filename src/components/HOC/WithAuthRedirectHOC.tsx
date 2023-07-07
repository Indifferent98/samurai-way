import React, { Component, ComponentType } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { AppStateType } from "../../Redux/Redux-store";

type mapStateToPropsType = {
  isAuth: boolean;
};
// type RedirectComponentPropsType = { userId?: string };
const mapStateForRedirect = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: mapStateToPropsType) => {
    let { isAuth, ...restProps } = props;

    if (isAuth)
      return (
        <Component {...(restProps as /*must be T, but doesnot work */ any)} />
      );

    return <Redirect to={"/login"} />;
  };
  return connect(mapStateForRedirect)(RedirectComponent);
}
