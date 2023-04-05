import React from "react";
///types -
export type MessagePropsType = {
  messageData: string;
};
export type DialogPropsType = {
  name: string;
  id: string;
};
export type myPostsData = {
  id: number;
  message: string;
  likesCount: number;
};
export type dialogsDataArrayType = {
  id: number;
  name: string;
};
export type messageDataType = {
  id: number;
  message: string;
};
export type stateType = {
  messagesPage: {
    dialogsData: dialogsDataArrayType[];
    messageData: messageDataType[];
    newMessageToMessagesTitle: string;
    updateMessageTitle: (title: string) => void;
  };
  profilePage: {
    myPostsData: myPostsData[];
    newPostProfileTitle: string;
    updatePostTitle: (title: string) => void;
  };
  navBar: string[];
};
///types +

///data -
const dialogsDataUsers: dialogsDataArrayType[] = [
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
///data +

//changeFunc -
export const addPost = (): void => {
  let newPost: myPostsData = {
    id: 77,
    message: state.profilePage.newPostProfileTitle,
    likesCount: 0,
  };
  state.profilePage.myPostsData.unshift(newPost);
  state.profilePage.newPostProfileTitle = "";
  renderEntireTree();
};
const updateMessageTitle = (title: string) => {
  state.messagesPage.newMessageToMessagesTitle = title;

  renderEntireTree();
};
export const addMessage = (): void => {
  let newMessage: messageDataType = {
    id: 77,
    message: state.messagesPage.newMessageToMessagesTitle,
  };
  messageData.push(newMessage);
  state.messagesPage.newMessageToMessagesTitle = "";
  renderEntireTree();
};
const updatePostTitle = (title: string) => {
  state.profilePage.newPostProfileTitle = title;
  renderEntireTree();
};
let renderEntireTree = () => {};
export const subscriber = (observer: () => void) => {
  renderEntireTree = observer;
};
//changeFunc +

///State
export const state: stateType = {
  messagesPage: {
    dialogsData: dialogsDataUsers,
    messageData: messageData,
    newMessageToMessagesTitle: newMessageToMessagesTitle,
    updateMessageTitle: updateMessageTitle,
  },
  profilePage: {
    myPostsData: myPostsData,
    newPostProfileTitle: newPostProfileTitle,
    updatePostTitle: updatePostTitle,
  },
  navBar: navBar,
};
