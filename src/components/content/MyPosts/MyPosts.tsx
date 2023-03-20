import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { messageDataArrayType } from "../../Dialogs/Dialogs";
type myPostData = {
  id: number;
  message: string;
  likesCount: number;
};
const MyPosts = (): JSX.Element => {
  let myPostsData: myPostData[] = [
    { id: 1, message: "Hi Whats New?", likesCount: 3 },
    { id: 2, message: "Hello", likesCount: 6 },
    { id: 3, message: "How Are you", likesCount: 754 },
    { id: 4, message: "Fine", likesCount: 11 },
    { id: 5, message: "Lets found smth", likesCount: 0 },
  ];
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
      <Post like={myPostsData[0].likesCount} message={myPostsData[0].message} />
      <Post like={myPostsData[1].likesCount} message={myPostsData[1].message} />
      <Post like={myPostsData[2].likesCount} message={myPostsData[2].message} />
      <Post like={myPostsData[3].likesCount} message={myPostsData[3].message} />
      <Post like={myPostsData[4].likesCount} message={myPostsData[4].message} />
    </div>
  );
};
export { MyPosts };
