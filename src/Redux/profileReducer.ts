import { addMessageCreator } from "./dialogsReducer";
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
  profile: null,
};

type contactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
type photosType = {
  small: string;
  large: string;
};

export type getUserProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: contactsType;
  photos: photosType;
};

export type initialStateProfileType = {
  myPostsData: myPostsDataType[];
  newPostProfileTitle: string;
  profile: null | getUserProfileType;
};

export const updatePostTitleActionCreator = (title: string) => {
  return { type: "UPDATE-POST-TITLE", title } as const;
};

export const addPostActionCreator = () => ({
  type: "ADD-POST" as const,
});

export const setUserProfileAC = (profile: getUserProfileType) =>
  ({
    type: "SET-USER-PFOILE",
    profile,
  } as const);

export const profileReducer = (
  state: initialStateProfileType = initialState,
  action: dispatchActionTypes
): initialStateProfileType => {
  switch (action.type) {
    case "UPDATE-POST-TITLE":
      return { ...state, newPostProfileTitle: action.title };

    case "ADD-POST":
      const newPost: myPostsDataType = {
        id: 77,
        message: state.newPostProfileTitle,
        likesCount: 0,
      };

      return {
        ...state,
        myPostsData: [newPost, ...state.myPostsData],
        newPostProfileTitle: "",
      };

    case "SET-USER-PFOILE":
      return { ...state, profile: action.profile };

    default:
      return { ...state };
  }
};
