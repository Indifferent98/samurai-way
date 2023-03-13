import React from "react";
import "./MyPosts.module.css";
import { Post } from "./Post/Post";
let classes = {
  item: "MyPosts_item__gV+xB img",
};

const MyPosts = (): JSX.Element => {
  return (
    <div>
      My postsss
      <div>
        New Post
        <textarea name="" id=""></textarea>
        <button>Add Post</button>
        <button>Remove</button>
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
