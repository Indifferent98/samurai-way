import React from "react";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
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

export type myPostsDataType = {
  id: number;
  message: string;
  likesCount: number;
};

export type dialogsDataType = {
  id: number;
  name: string;
};

export type messageDataType = {
  id: number;
  message: string;
};

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

export type StoreType = {
  _state: stateType;
  callSubscriber: () => void;
  subscriber: (observer: () => void) => void;
  getState: () => stateType;
  dispatch: (action: dispatchActionTypes) => void;
};

///types +

///data -

export const store: StoreType = {
  _state: {
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Timur" },
        { id: 2, name: "Vladimir" },
        { id: 3, name: "Maxim" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Stepan" },
        { id: 6, name: "HowAreYou" },
      ],
      messageData: [
        { id: 1, message: "Hmmm" },
        { id: 2, message: "Butter" },
        { id: 3, message: "Milk" },
        { id: 4, message: "Bread" },
        { id: 5, message: "Tost" },
        { id: 6, message: "CheckNewValue" },
      ],
      newMessageToMessagesTitle: "",
    },
    profilePage: {
      myPostsData: [
        { id: 1, message: "Hi Whats New?", likesCount: 3 },
        { id: 2, message: "Hello", likesCount: 6 },
        { id: 3, message: "How Are you", likesCount: 754 },
        { id: 4, message: "Fine", likesCount: 11 },
        { id: 5, message: "Lets found smth", likesCount: 0 },
        { id: 6, message: "Check Our Posts", likesCount: 66 },
      ],
      newPostProfileTitle: "",
    },
    navBar: ["Profile", "Messages", "News", "Music", "Settings"],
  },

  dispatch(action) {
    debugger;
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.navBar = navBarReducer(this._state.navBar, action);

    // profileReducer(this._state.profilePage, action);
    // dialogsReducer(this._state.messagesPage, action);

    this.callSubscriber();
  },
  subscriber(observer) {
    this.callSubscriber = observer;
  },
  callSubscriber() {},

  getState() {
    return this._state;
  },
};
///data+

///Function-
export const updateMessageTitleCreator = (title: string) => {
  return { title: title, type: "UPDATE-MESSAGE-TITLE" } as const;
};

export const addMessageCreator = () =>
  ({
    type: "ADD-MESSAGE",
  } as const);

export const updatePostTitleActionCreator = (title: string) => {
  return { type: "UPDATE-POST-TITLE", title: title } as const;
};

export const addPostActionCreator = () =>
  ({
    type: "ADD-POST",
  } as const);

///Function+
