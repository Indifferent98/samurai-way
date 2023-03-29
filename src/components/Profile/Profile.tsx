import React from "react";
import s from "./profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { myPostsData } from "../../Redux/state";

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
  addPost: (title: string) => void;
};

const Profile = (props: ContentPropsType): JSX.Element => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts addPost={props.addPost} myPostsData={props.myPostsData} />
    </div>
  );
};
export { Profile };
