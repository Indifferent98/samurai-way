import React from "react";
import "./content.module.css";
let classes = {
  content: "content_content__-a1Yl",
  contentImg: "content_contentImg__d16sr",
  contentAvatar: "content_contentAvatar__6a3WE",
  profileHeadder: "content_profileHeadder__6oXrN",
  profileInfo: "content_profileInfo__7WeUC",
  profileInfoItem: "content_profileInfoItem__2jxmA ",
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
      <div>
        My postsss
        <div>New Post</div>
        <div>Post1</div>
        <div>Post2</div>
        <div>Post3</div>
      </div>
    </div>
  );
};
export { Content };
