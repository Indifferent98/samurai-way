import React from "react";
import { combineReducers, createStore } from "redux";

import {
  addPostActionCreator,
  myPostsDataType,
  profileReducer,
  updatePostTitleActionCreator,
} from "./profileReducer";

import {
  addMessageCreator,
  dialogsDataType,
  dialogsReducer,
  messageDataType,
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

export type stateType = {
  messagesPage: {
    dialogsData: dialogsDataType[];
    messageData: messageDataType[];
    newMessageToMessagesTitle: string;
  };

  profilePage: {
    myPostsData: myPostsDataType[];
    newPostProfileTitle: string;
  };

  navBar: string[];
};

export type dispatchActionTypes =
  | addMessageActionCreatorType
  | updateMessageTitleActionCreatorType
  | addPostActionCreatorType
  | updatePostTitleActionCreatorType;

// export type StoreType = {
//   _state: stateType;
//   callSubscriber: () => void;
//   subscriber: (observer: () => void) => void;
//   getState: () => stateType;
//   dispatch: (action: dispatchActionTypes) => void;
// };
export type AppStateType = ReturnType<typeof reducers>;

export const reducers = combineReducers({
  navBar: navBarReducer,
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
});

export const store = createStore(reducers);
