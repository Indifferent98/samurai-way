import React, { ChangeEvent, LegacyRef, RefObject, useState } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import {
  ActionAddPostType,
  ActionUpdatePostTitleType,
  dispatchActionTypes,
  myPostsData,
} from "../../../Redux/state";

type MyPostsPropsType = {
  myPostsData: myPostsData[];

  newPostProfileTitle: string;
  // addPost: () => void;
  // updatePostTitle: (title: string) => void;
  dispatch: (action: dispatchActionTypes) => void;
};

const MyPosts = (props: MyPostsPropsType): JSX.Element => {
  let postsForApplicationPost = props.myPostsData.map((t) => (
    <Post like={t.likesCount} message={t.message} />
  ));

  const addPostButtonHandler = () => {
    const action: ActionAddPostType = { type: "ADD-POST" };
    props.dispatch(action);
  };

  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const action: ActionUpdatePostTitleType = {
      type: "UPDATE-POST-TITLE",
      title: e.currentTarget.value,
    };
    props.dispatch(action);
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
