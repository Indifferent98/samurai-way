import React from "react";
const Content = (): JSX.Element => {
  return (
    <div className="content">
      <img
        className="contentImg"
        src="https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg"
        alt=""
      />
      <div className="profileHeadder">
        <img
          className="contentAvatar"
          src="https://i.pinimg.com/originals/fb/d4/85/fbd485151b22d7ccfb912435ac65315a.jpg"
          alt=""
        />
        <div className="profileInfo"> Evgeny </div>
      </div>
      <div>
        My posts
        <div>New Post</div>
        <div>Post1</div>
        <div>Post2</div>
        <div>Post3</div>
      </div>
    </div>
  );
};
export { Content };
