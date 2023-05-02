import React from "react";
import { dispatchActionTypes } from "./Redux-store";

export type myPostsDataType = {
  id: number;
  message: string;
  likesCount: number;
};
const initialState: initialStateProfileType = {
  myPostsData: [
    { id: 1, message: "Hi Whats New?", likesCount: 3 },
    { id: 2, message: "Hello", likesCount: 6 },
    { id: 3, message: "How Are you", likesCount: 754 },
    { id: 4, message: "Fine", likesCount: 11 },
    { id: 5, message: "Lets found smth", likesCount: 0 },
    { id: 6, message: "Check Our Posts", likesCount: 66 },
  ],
  newPostProfileTitle: "",
};

export type initialStateProfileType = {
  myPostsData: myPostsDataType[];
  newPostProfileTitle: string;
};

export const updatePostTitleActionCreator = (title: string) => {
  return { type: "UPDATE-POST-TITLE", title: title } as const;
};

export const addPostActionCreator = () => ({
  type: "ADD-POST" as const,
});

export const profileReducer = (
  state: initialStateProfileType = initialState,
  action: dispatchActionTypes
): initialStateProfileType => {
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
