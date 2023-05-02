import React from "react";
import { combineReducers, createStore } from "redux";

import {
  addPostActionCreator,
  profileReducer,
  updatePostTitleActionCreator,
} from "./profileReducer";

import {
  addMessageCreator,
  dialogsReducer,
  updateMessageTitleCreator,
} from "./dialogsReducer";

import { navBarReducer } from "./navBarReducer";

///types -
type addMessageActionCreatorType = ReturnType<typeof addMessageCreator>;
type updateMessageTitleActionCreatorType = ReturnType<
  typeof updateMessageTitleCreator
>;
type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>;
type updatePostTitleActionCreatorType = ReturnType<
  typeof updatePostTitleActionCreator
>;
export type dispatchActionTypes =
  | addMessageActionCreatorType
  | updateMessageTitleActionCreatorType
  | addPostActionCreatorType
  | updatePostTitleActionCreatorType;

export type AppStateType = ReturnType<typeof reducer>;

///redux store
export const reducer = combineReducers({
  navBar: navBarReducer,
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
});

export const store = createStore(reducer);
