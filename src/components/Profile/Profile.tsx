import React from "react";
import s from "./profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {
  ActionUpdatePostTitleType,
  dispatchActionTypes,
  myPostsData,
} from "../../Redux/state";

// const classes = {
//   content: "content_content__vXRFo",
//   contentImg: "content_contentImg__buA7k ",
//   contentAvatar: "content_contentAvatar__5Q-Bi",
//   profileHeadder: "content_profileHeadder__vS6gI",
//   profileInfo: "content_profileInfo__rpCcW",
//   profileInfoItem: "content_profileInfoItem__8lqpQ",
// };
type ContentPropsType = {
  myPostsData: myPostsData[];

  newPostProfileTitle: string;

  dispatch: (action: dispatchActionTypes) => void;
  // updatePostTitle: (title: string) => void;
  // addPost: () => void;
};

const Profile = (props: ContentPropsType): JSX.Element => {
  // const actionUpdatePostTitle:ActionUpdatePostTitleType={type:"UPDATE-POST-TITLE" }
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
