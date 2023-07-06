import React from "react";

import {
  changeCurrentUserIdAC,
  getUserProfileType,
  initialStateProfileType,
  setUserProfileAC,
  setUserProfileTC,
} from "../../../Redux/profileReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ProfileApi } from "./ProfileApi";
import { RouteComponentProps, withRouter } from "react-router-dom";

type mapDispatchToPropsType = {
  setUserProfile: (profile: getUserProfileType) => void;
  setUserProfileThunk: (userId: string) => void;
};

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//   return {
//     setUserProfile(profile: getUserProfileType) {
//       dispatch(setUserProfileAC(profile));
//     },
//   };
// };

const dispatchObj = {
  setUserProfile: setUserProfileAC,
  setUserProfileThunk: setUserProfileTC,
};

type mapStateToPropsType = {
  profilePage: initialStateProfileType;
};

type ParamsType = { userId?: string };

type commonPropsType = RouteComponentProps<ParamsType>;
export type PropsType = commonPropsType & ParamsType;

const mapStateToProps = (state: mapStateToPropsType): mapStateToPropsType => ({
  profilePage: state.profilePage,
});

export type ProfileApiType = mapStateToPropsType & mapDispatchToPropsType;

export type SuperPropsType = ProfileApiType & PropsType;

let withUrlDataContainerComponent = withRouter(ProfileApi);

export const ProfileContainer = connect(
  mapStateToProps,
  dispatchObj
)(withUrlDataContainerComponent);
