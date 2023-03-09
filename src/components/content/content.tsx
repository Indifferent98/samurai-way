import React from "react";
import "./content.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
const classes = {
  content: "content_content__vXRFo",
  contentImg: "content_contentImg__buA7k ",
  contentAvatar: "content_contentAvatar__5Q-Bi",
  profileHeadder: "content_profileHeadder__vS6gI",
  profileInfo: "content_profileInfo__rpCcW",
  profileInfoItem: "content_profileInfoItem__8lqpQ",
};
const Content = (): JSX.Element => {
  return (
    <div className={classes.content}>
      <img
        className={classes.contentImg}
        src="https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg"
        alt=""
      />
      <div className={classes.profileHeadder}>
        <img
          className={classes.contentAvatar}
          src="https://i.pinimg.com/originals/fb/d4/85/fbd485151b22d7ccfb912435ac65315a.jpg"
          alt=""
        />
        <div className={classes.profileInfo}>
          <div className={classes.profileInfoItem}>Evgeny:</div>
          <div className={classes.profileInfoItem}>Age:</div>
          <div className={classes.profileInfoItem}>Grade:</div>
          <div className={classes.profileInfoItem}>About me:</div>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};
export { Content };
