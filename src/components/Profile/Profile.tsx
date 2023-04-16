import React from "react";
import s from "./profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { dispatchActionTypes, myPostsData } from "../../Redux/state";

type ContentPropsType = {
  myPostsData: myPostsData[];

  newPostProfileTitle: string;

  dispatch: (action: dispatchActionTypes) => void;
};

const Profile = (props: ContentPropsType): JSX.Element => {
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
export { Profile };
