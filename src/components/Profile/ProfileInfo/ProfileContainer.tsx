import React from "react";

import {
  changeCurrentUserIdAC,
  getUserProfileType,
  initialStateProfileType,
  setUserProfileAC,
} from "../../../Redux/profileReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ProfileApi } from "./ProfileApi";

type mapDispatchToPropsType = {
  setUserProfile: (profile: getUserProfileType) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    setUserProfile(profile: getUserProfileType) {
      dispatch(setUserProfileAC(profile));
    },
  };
};

type mapStateToPropsType = {
  profilePage: initialStateProfileType;
};

const mapStateToProps = (state: mapStateToPropsType) => {
  return { profilePage: state.profilePage };
};

export type ProfileApiType = mapStateToPropsType & mapDispatchToPropsType;
export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileApi);
