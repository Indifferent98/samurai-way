import React from "react";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { getUserProfileType } from "../../Redux/profileReducer";

export type ProfilePropsType = {
  profile: getUserProfileType;
};

export const Profile = (props: ProfilePropsType): JSX.Element => {
  return (
    <>
      <ProfileInfo profile={props.profile} />

      <MyPostsContainer />
    </>
  );
};
