import React from "react";
import s from "./profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { dispatchActionTypes, myPostsDataType } from "../../Redux/state";

type ContentPropsType = {
  myPostsData: myPostsDataType[];
  newPostProfileTitle: string;
  dispatch: (action: dispatchActionTypes) => void;
};

export const Profile = (props: ContentPropsType): JSX.Element => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        dispatch={props.dispatch}
        newPostProfileTitle={props.newPostProfileTitle}
        myPostsData={props.myPostsData}
      />
    </div>
  );
};
