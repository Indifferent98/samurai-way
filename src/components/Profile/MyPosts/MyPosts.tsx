import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { dispatchActionTypes } from "../../../Redux/Redux-store";
import {
  addPostActionCreator,
  myPostsDataType,
  updatePostTitleActionCreator,
} from "../../../Redux/profileReducer";
type MyPostsPropsType = {
  addPostButtonHandler: () => void;

  myPostsData: myPostsDataType[];
  newPostProfileTitle: string;
  onPostChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const MyPosts = (props: MyPostsPropsType): JSX.Element => {
  let postsForApplicationPost = props.myPostsData.map((t) => (
    <Post like={t.likesCount} message={t.message} />
  ));

  const addPostButtonHandler = () => {
    props.addPostButtonHandler();
  };

  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onPostChangeHandler(e);
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
