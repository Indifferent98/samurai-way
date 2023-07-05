import { AuthReducer } from "./AuthReducer";
import { UsersReducer } from "./UsersReducer";
import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";

import {
  addPostActionCreator,
  changeCurrentUserIdAC,
  profileReducer,
  setUserProfileAC,
  updatePostTitleActionCreator,
} from "./profileReducer";

import {
  addMessageCreator,
  dialogsReducer,
  updateMessageTitleCreator,
} from "./dialogsReducer";

import { navBarReducer } from "./navBarReducer";
import thunk from "redux-thunk";

///types -
type addMessageActionCreatorType = ReturnType<typeof addMessageCreator>;
type updateMessageTitleActionCreatorType = ReturnType<
  typeof updateMessageTitleCreator
>;
type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>;
type updatePostTitleActionCreatorType = ReturnType<
  typeof updatePostTitleActionCreator
>;
type setUserProfileACType = ReturnType<typeof setUserProfileAC>;
export type changeCurrentUserIdACType = ReturnType<
  typeof changeCurrentUserIdAC
>;
export type dispatchActionTypes =
  | addMessageActionCreatorType
  | updateMessageTitleActionCreatorType
  | addPostActionCreatorType
  | updatePostTitleActionCreatorType
  | setUserProfileACType
  | changeCurrentUserIdACType;

export type AppStateType = ReturnType<typeof reducer>;

///redux store
export const reducer = combineReducers({
  navBar: navBarReducer,
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: UsersReducer,
  auth: AuthReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;
