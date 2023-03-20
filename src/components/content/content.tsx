import React from "react";
import s from "./content.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { myPostsData } from "../..";
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
};

const Content = (props: ContentPropsType): JSX.Element => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts myPostsData={props.myPostsData} />
    </div>
  );
};
export { Content };
