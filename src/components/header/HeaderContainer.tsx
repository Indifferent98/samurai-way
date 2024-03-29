import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Header } from "./Header";

import {
  changeCurrentUserProfile,
  initialStateType,
  requestDataType,
  setAuthChangeProfile,
  setAuthUserData,
} from "../../Redux/AuthReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  getUserProfileType,
  initialStateProfileType,
} from "../../Redux/profileReducer";
import { socialNetWorkApi } from "../../DAL/socialNetWorkApi";

export type responseType = {
  messages: string[];
  fieldsErrors: [];
  resultCode: number;
};

class HeaderApi extends React.Component<HeaderContainerPropsType> {
  componentDidMount(): void {
    this.props.setAuthChangeProfile();
  }

  settings = {
    withCredentials: true,
    headers: { "API-KEY": "34d100b8-894d-4061-9da0-9a27cb217fe9" },
  };

  render() {
    return (
      <Header
        photoUrl={this.props.auth.currentUserProfile.photos.large}
        isAuth={this.props.auth.isAuth}
        login={this.props.auth.login}
      />
    );
  }
}

type mapStateToPropsType = {
  auth: initialStateType;
};

type mapDispatchToProps = {
  setAuthUserData: (data: requestDataType) => void;
  changeCurrentUserProfile: (newProfile: getUserProfileType) => void;
  setAuthChangeProfile: () => void;
};
type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToProps;

const mapStateToProps = (state: mapStateToPropsType) => ({
  auth: state.auth,
});

export const HeaderContainer = connect(mapStateToProps, {
  setAuthUserData,
  changeCurrentUserProfile,
  setAuthChangeProfile,
})(HeaderApi);
