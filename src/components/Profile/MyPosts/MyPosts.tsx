import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import {
  addPostActionCreator,
  dispatchActionTypes,
  myPostsDataType,
  updatePostTitleActionCreator,
} from "../../../Redux/state";
type MyPostsPropsType = {
  myPostsData: myPostsDataType[];
  newPostProfileTitle: string;
  dispatch: (action: dispatchActionTypes) => void;
};

const MyPosts = (props: MyPostsPropsType): JSX.Element => {
  let postsForApplicationPost = props.myPostsData.map((t) => (
    <Post like={t.likesCount} message={t.message} />
  ));

  const addPostButtonHandler = () => {
    const action = addPostActionCreator();
    props.dispatch(action);
  };

  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const title = e.currentTarget.value;
    const action = updatePostTitleActionCreator(title);
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
