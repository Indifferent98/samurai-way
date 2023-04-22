import React from "react";
import s from "./profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { dispatchActionTypes } from "../../Redux/Redux-store";
import { myPostsDataType } from "../../Redux/profileReducer";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

type ContentPropsType = {
  store: any;
};

export const Profile = (props: ContentPropsType): JSX.Element => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};
