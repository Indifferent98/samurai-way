import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Header } from "./Header";
import axios from "axios";
import {
  changeCurrentUserProfile,
  initialStateType,
  requestDataType,
  setAuthUserData,
} from "../../Redux/AuthReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  getUserProfileType,
  initialStateProfileType,
} from "../../Redux/profileReducer";

type axiosGetAuthResponseType = {
  data: requestDataType;
  messages: string[];
  fieldsErrors: [];
  resultCode: number;
};

class HeaderApi extends React.Component<HeaderContainerPropsType> {
  componentDidMount(): void {
    debugger;
    axios
      .get<axiosGetAuthResponseType>(
        "https://social-network.samuraijs.com/api/1.0/auth/me",
        this.settings
      )
      .then((res) => {
        if (!res.data.resultCode) {
          this.props.setAuthUserData(res.data.data);
          return res.data.data.id;
        }
      })
      .then((id) => {
        return axios.get<getUserProfileType>(
          `https://social-network.samuraijs.com/api/1.0/profile/${id}`
        );
      })
      .then((data) => {
        this.props.changeCurrentUserProfile(data.data);
      });
  }

  settings = {
    withCredentials: true,
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
};
type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToProps;

const mapStateToProps = (state: mapStateToPropsType) => ({
  auth: state.auth,
});

export const HeaderContainer = connect(mapStateToProps, {
  setAuthUserData,
  changeCurrentUserProfile,
})(HeaderApi);
