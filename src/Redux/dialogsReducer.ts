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
const initialState: initialStateDialogsType = {
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
};

export type initialStateDialogsType = {
  dialogsData: dialogsDataType[];
  messageData: messageDataType[];
  newMessageToMessagesTitle: string;
};

export const updateMessageTitleCreator = (title: string) =>
  ({ title: title, type: "UPDATE-MESSAGE-TITLE" } as const);

export const addMessageCreator = () =>
  ({
    type: "ADD-MESSAGE",
  } as const);

export const dialogsReducer = (
  state: initialStateDialogsType = initialState,
  action: dispatchActionTypes
): initialStateDialogsType => {
  switch (action.type) {
    case "ADD-MESSAGE":
      const newMessage: messageDataType = {
        id: 77,
        message: state.newMessageToMessagesTitle,
      };

      return {
        ...state,
        messageData: [...state.messageData, newMessage],
        newMessageToMessagesTitle: "",
      };

    case "UPDATE-MESSAGE-TITLE":
      return { ...state, newMessageToMessagesTitle: action.title };
  }
  return state;
};
