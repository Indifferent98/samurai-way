import React from "react";
import { dispatchActionTypes } from "./Redux-store";
export type messageDataType = {
  id: number;
  message: string;
};
export type dialogsDataType = {
  id: number;
  name: string;
};
const initialState = {
  dialogsData: [
    { id: 1, name: "Timur" },
    { id: 2, name: "Vladimir" },
    { id: 3, name: "Maxim" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Stepan" },
    { id: 6, name: "HowAreYou" },
  ] as Array<dialogsDataType>,
  messageData: [
    { id: 1, message: "Hmmm" },
    { id: 2, message: "Butter" },
    { id: 3, message: "Milk" },
    { id: 4, message: "Bread" },
    { id: 5, message: "Tost" },
    { id: 6, message: "CheckNewValue" },
  ] as Array<messageDataType>,
  newMessageToMessagesTitle: "" as string,
};

type initialStateType = typeof initialState;

export const updateMessageTitleCreator = (title: string) =>
  ({ title: title, type: "UPDATE-MESSAGE-TITLE" } as const);

export const addMessageCreator = () =>
  ({
    type: "ADD-MESSAGE",
  } as const);

export const dialogsReducer = (
  state: initialStateType = initialState,
  action: dispatchActionTypes
): initialStateType => {
  switch (action.type) {
    case "ADD-MESSAGE":
      const newMessage: messageDataType = {
        id: 77,
        message: state.newMessageToMessagesTitle,
      };
      state.messageData.push(newMessage);
      state.newMessageToMessagesTitle = "";
      return state;

    case "UPDATE-MESSAGE-TITLE":
      state.newMessageToMessagesTitle = action.title;
      return state;
  }
  return state;
};
