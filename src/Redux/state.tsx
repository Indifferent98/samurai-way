import React from "react";

///types -
type addMessageActionCreatorType = () => ActionAddMessageType;

type updateMessageTitleActionCreatorType = (
  title: string
) => ActionUpdateMessageTitleType;
type addPostActionCreatorType = () => ActionAddPostType;

type updatePostTitleActionCreatorType = (
  title: string
) => ActionUpdatePostTitleType;

export type myPostsData = {
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
    myPostsData: myPostsData[];
    newPostProfileTitle: string;
  };
  navBar: string[];
};

export type ActionAddPostType = {
  type: "ADD-POST";
};
export type ActionUpdatePostTitleType = {
  type: "UPDATE-POST-TITLE";
  title: string;
};
export type ActionAddMessageType = {
  type: "ADD-MESSAGE";
};
export type ActionUpdateMessageTitleType = {
  type: "UPDATE-MESSAGE-TITLE";
  title: string;
};
export type dispatchActionTypes =
  | ActionAddPostType
  | ActionUpdatePostTitleType
  | ActionAddMessageType
  | ActionUpdateMessageTitleType;

export type StoreType = {
  _state: stateType;
  callSubscriber: () => void;
  subscriber: (observer: () => void) => void;
  getState: () => stateType;
  dispatch: (action: dispatchActionTypes) => void;
};
///types +

///data -
const dialogsDataUsers: dialogsDataType[] = [
  { id: 1, name: "Timur" },
  { id: 2, name: "Vladimir" },
  { id: 3, name: "Maxim" },
  { id: 4, name: "Igor" },
  { id: 5, name: "Stepan" },
  { id: 6, name: "HowAreYou" },
];
const messageData: messageDataType[] = [
  { id: 1, message: "Hmmm" },
  { id: 2, message: "Butter" },
  { id: 3, message: "Milk" },
  { id: 4, message: "Bread" },
  { id: 5, message: "Tost" },
  { id: 6, message: "CheckNewValue" },
];
const myPostsData: myPostsData[] = [
  { id: 1, message: "Hi Whats New?", likesCount: 3 },
  { id: 2, message: "Hello", likesCount: 6 },
  { id: 3, message: "How Are you", likesCount: 754 },
  { id: 4, message: "Fine", likesCount: 11 },
  { id: 5, message: "Lets found smth", likesCount: 0 },
  { id: 6, message: "Check Our Posts", likesCount: 66 },
];
const navBar: string[] = ["Profile", "Messages", "News", "Music", "Settings"];

let newPostProfileTitle: string = "";
let newMessageToMessagesTitle: string = "";

export const store: StoreType = {
  _state: {
    messagesPage: {
      dialogsData: dialogsDataUsers,
      messageData: messageData,
      newMessageToMessagesTitle: newMessageToMessagesTitle,
    },
    profilePage: {
      myPostsData: myPostsData,
      newPostProfileTitle: newPostProfileTitle,
    },
    navBar: navBar,
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost: myPostsData = {
        id: 77,
        message: this._state.profilePage.newPostProfileTitle,
        likesCount: 0,
      };
      this._state.profilePage.myPostsData.unshift(newPost);
      this._state.profilePage.newPostProfileTitle = "";
      this.callSubscriber();
    } else if (action.type === "UPDATE-POST-TITLE") {
      this._state.profilePage.newPostProfileTitle = action.title;
      this.callSubscriber();
    } else if (action.type === "ADD-MESSAGE") {
      const newMessage: messageDataType = {
        id: 77,
        message: this._state.messagesPage.newMessageToMessagesTitle,
      };
      messageData.push(newMessage);
      this._state.messagesPage.newMessageToMessagesTitle = "";
      this.callSubscriber();
    } else if (action.type === "UPDATE-MESSAGE-TITLE") {
      this._state.messagesPage.newMessageToMessagesTitle = action.title;
      this.callSubscriber();
    }
  },
  callSubscriber() {},
  subscriber(observer) {
    this.callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
};
///data+

///Function-
export const updateMessageTitleCreator: updateMessageTitleActionCreatorType = (
  title
) => {
  return { title: title, type: "UPDATE-MESSAGE-TITLE" };
};
export const addMessageCreator: addMessageActionCreatorType = () => {
  return { type: "ADD-MESSAGE" };
};

export const addPostActionCreator: addPostActionCreatorType = () => {
  return { type: "ADD-POST" };
};

export const updatePostTitleActionCreator: updatePostTitleActionCreatorType = (
  title
) => {
  return { type: "UPDATE-POST-TITLE", title: title };
};
///Function+
