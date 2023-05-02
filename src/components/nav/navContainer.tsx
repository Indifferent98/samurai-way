import React from "react";
import { connect } from "react-redux";
import { Nav } from "./nav";
import { AppStateType } from "../../Redux/Redux-store";
import { initialStateNavType } from "../../Redux/navBarReducer";
import { Dispatch } from "redux";

type mapStateToProps = {
  navBar: initialStateNavType;
};

const mapStateToProps = (state: mapStateToProps): mapStateToProps => {
  return {
    navBar: state.navBar,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
