import React, { ChangeEvent } from "react";

import {
  addPostActionCreator,
  initialStateProfileType,
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

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

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
