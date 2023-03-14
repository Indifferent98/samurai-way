import React from "react";
import s from "./Post.module.css";
import { MyPosts } from "../MyPosts";

type PostPropsType = {
  message: string;
  like: Number;
};
const Post = (props: PostPropsType): JSX.Element => {
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/originals/fb/d4/85/fbd485151b22d7ccfb912435ac65315a.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>Like: {props.like}</span>
      </div>
    </div>
  );
};
export { Post };
