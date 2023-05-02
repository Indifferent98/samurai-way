import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import {
  AppStateType,
  dispatchActionTypes,
  store,
} from "../../../Redux/Redux-store";
import {
  addPostActionCreator,
  initialStateProfileType,
  myPostsDataType,
  updatePostTitleActionCreator,
} from "../../../Redux/profileReducer";
import { MyPosts } from "./MyPosts";

import { connect } from "react-redux";
import { Dispatch } from "redux";

type MapStatePropsType = {
  profilePage: initialStateProfileType;
};

type MapDispatchPropsType = {
  onPostChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  addPostButtonHandler: () => void;
};

const mapStateToProps = (state: MapStatePropsType): MapStatePropsType => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    onPostChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updatePostTitleActionCreator(e.currentTarget.value));
    },
    addPostButtonHandler: () => {
      dispatch(addPostActionCreator());
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
