import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { dispatchActionTypes } from "../../../Redux/Redux-store";
import {
  addPostActionCreator,
  myPostsDataType,
  updatePostTitleActionCreator,
} from "../../../Redux/profileReducer";
import { MyPosts } from "./MyPosts";
type MyPostsPropsType = {
  store: any;
};

export const MyPostsContainer = (props: MyPostsPropsType): JSX.Element => {
  debugger;
  const state = props.store.getState();

  const addPostButtonHandler = () => {
    const action = addPostActionCreator();
    props.store.dispatch(action);
  };

  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const title = e.currentTarget.value;
    const action = updatePostTitleActionCreator(title);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      onPostChangeHandler={onPostChangeHandler}
      myPostsData={state.profilePage.myPostsData}
      addPostButtonHandler={addPostButtonHandler}
      newPostProfileTitle={state.profilePage.newPostProfileTitle}
    />
  );
};
