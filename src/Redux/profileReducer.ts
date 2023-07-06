import { socialNetWorkApi } from "./../DAL/socialNetWorkApi";
import { addMessageCreator } from "./dialogsReducer";
import React from "react";
import { dispatchActionTypes } from "./Redux-store";
import { Dispatch } from "redux";

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
  profile: {
    contacts: {
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
    },
    userId: 2,
    lookingForAJob: true,
    lookingForAJobDescription: "helloooooooo",
    fullName: "Evgeny",
    photos: {
      large: "",
      small: "",
    },
  },
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
  photos: photosType;
  contacts: contactsType;
};

export type initialStateProfileType = {
  myPostsData: myPostsDataType[];
  newPostProfileTitle: string;
  profile: getUserProfileType;
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

export const changeCurrentUserIdAC = (newId: number) =>
  ({
    type: "CHANGE-CURRENT-USER-ID",
    newId,
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

    case "CHANGE-CURRENT-USER-ID":
      return { ...state, profile: { ...state.profile, userId: action.newId } };

    default:
      return { ...state };
  }
};

export const setUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
  socialNetWorkApi.getProfile(Number(userId)).then((res) => {
    dispatch(setUserProfileAC(res.data));
  });
};
