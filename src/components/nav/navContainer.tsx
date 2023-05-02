import React from "react";
import { connect } from "react-redux";
import { Nav } from "./nav";

const mapStateToProps = (state: any) => {
  return {
    navBar: state.navBar,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
