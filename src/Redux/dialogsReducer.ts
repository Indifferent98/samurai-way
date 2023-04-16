import React from "react";
import {
  dialogsDataType,
  dispatchActionTypes,
  messageDataType,
  store,
} from "./state";

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

export const dialogsReducer = (
  state: initialStateType = initialState,
  action: dispatchActionTypes
): initialStateType => {
  if (action.type === "ADD-MESSAGE") {
    const newMessage: messageDataType = {
      id: 77,
      message: state.newMessageToMessagesTitle,
    };
    state.messageData.push(newMessage);
    state.newMessageToMessagesTitle = "";
  } else if (action.type === "UPDATE-MESSAGE-TITLE") {
    state.newMessageToMessagesTitle = action.title;
  }

  return state;
};