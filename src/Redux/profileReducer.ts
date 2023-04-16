import React from "react";
import { dispatchActionTypes, myPostsDataType } from "./state";

const initialState = {
  myPostsData: [
    { id: 1, message: "Hi Whats New?", likesCount: 3 },
    { id: 2, message: "Hello", likesCount: 6 },
    { id: 3, message: "How Are you", likesCount: 754 },
    { id: 4, message: "Fine", likesCount: 11 },
    { id: 5, message: "Lets found smth", likesCount: 0 },
    { id: 6, message: "Check Our Posts", likesCount: 66 },
  ] as Array<myPostsDataType>,
  newPostProfileTitle: "" as string,
};

type initialStateType = typeof initialState;

export const updatePostTitleActionCreator = (title: string) => {
  return { type: "UPDATE-POST-TITLE", title: title } as const;
};

export const addPostActionCreator = () =>
  ({
    type: "ADD-POST",
  } as const);

export const profileReducer = (
  state: initialStateType = initialState,
  action: dispatchActionTypes
): initialStateType => {
  switch (action.type) {
    case "ADD-POST":
      const newPost: myPostsDataType = {
        id: 77,
        message: state.newPostProfileTitle,
        likesCount: 0,
      };
      state.myPostsData.unshift(newPost);
      state.newPostProfileTitle = "";
      return state;

    case "UPDATE-POST-TITLE":
      state.newPostProfileTitle = action.title;
      return state;
  }
  return state;
};
