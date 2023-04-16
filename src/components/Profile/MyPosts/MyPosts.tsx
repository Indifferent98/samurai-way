import React, { ChangeEvent, LegacyRef, RefObject, useState } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { myPostsData } from "../../../Redux/state";

type MyPostsPropsType = {
  myPostsData: myPostsData[];
  addPost: () => void;
  newPostProfileTitle: string;
  updatePostTitle: (title: string) => void;
};

const MyPosts = (props: MyPostsPropsType): JSX.Element => {
  let postsForApplicationPost = props.myPostsData.map((t) => (
    <Post like={t.likesCount} message={t.message} />
  ));

  const addPostButtonHandler = () => props.addPost();

  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updatePostTitle(e.currentTarget.value);
  };

  return (
    <div>
      <div className={s.changePost}>
        My postsss
        <div>
          New Post
          <textarea
            value={props.newPostProfileTitle}
            onChange={onPostChangeHandler}
            placeholder="Что нового?"
          ></textarea>
          <button onClick={addPostButtonHandler}>Add Post</button>
          <button>Remove</button>
        </div>
      </div>

      {postsForApplicationPost}
    </div>
  );
};
export { MyPosts };
