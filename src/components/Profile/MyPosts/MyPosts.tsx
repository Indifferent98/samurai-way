import React, { ChangeEvent } from "react";
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
  dispatch: (action: dispatchActionTypes) => void;
};
type addPostActionCreatorType = () => ActionAddPostType;

type updatePostTitleActionCreatorType = (
  title: string
) => ActionUpdatePostTitleType;

const addPostActionCreator: addPostActionCreatorType = () => {
  return { type: "ADD-POST" };
};

const updatePostTitleActionCreator: updatePostTitleActionCreatorType = (
  title
) => {
  return { type: "UPDATE-POST-TITLE", title: title };
};

const MyPosts = (props: MyPostsPropsType): JSX.Element => {
  let postsForApplicationPost = props.myPostsData.map((t) => (
    <Post like={t.likesCount} message={t.message} />
  ));

  const addPostButtonHandler = () => props.dispatch(addPostActionCreator());

  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const title = e.currentTarget.value;
    props.dispatch(updatePostTitleActionCreator(title));
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
