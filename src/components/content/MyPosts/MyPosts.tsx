import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

const MyPosts = (): JSX.Element => {
  return (
    <div>
      <div className={s.changePost}>
        My postsss
        <div>
          New Post
          <textarea name="" id=""></textarea>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <Post like={2} message="Privet" />
      <Post like={15} message="First dsdsdd" />
      <Post like={0} message="fdgdf s" />
      <Post like={2} message="CheckPost" />
      <Post like={3333} message="ttttttttt" />
    </div>
  );
};
export { MyPosts };
