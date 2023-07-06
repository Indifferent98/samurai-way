import React from "react";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { getUserProfileType } from "../../Redux/profileReducer";
import { Redirect } from "react-router-dom";

type ProfilePropsType1 = { isAuth: boolean } & ProfilePropsType;

export type ProfilePropsType = {
  profile: getUserProfileType;
};

export const Profile = (props: ProfilePropsType1): JSX.Element => {
  if (!props.isAuth) {
    return <Redirect to={"/Login"} />;
  }
  return (
    <>
      <ProfileInfo profile={props.profile} />

      <MyPostsContainer />
    </>
  );
};
