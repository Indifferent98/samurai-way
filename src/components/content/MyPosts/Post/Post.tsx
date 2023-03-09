import React from "react";
import "./Post.module.css";
import { MyPosts } from "../MyPosts";
let classes = {
  item: "Post_item__u0xGz img",
};
type PostPropsType = {
  message: string;
  like: Number;
};
const Post = (props: PostPropsType): JSX.Element => {
  return (
    <div className={classes.item}>
      <img
        src="https://i.pinimg.com/originals/fb/d4/85/fbd485151b22d7ccfb912435ac65315a.jpg"
        alt=""
      />{" "}
      {props.message}
      <div>
        <span>Like: {props.like}</span>
      </div>
    </div>
  );
};
export { Post };
