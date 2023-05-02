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

type MapStatePropsType = {
  profilePage: initialStateProfileType;
};

const mapStateToProps = (state: MapStatePropsType) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch: any) => {
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
