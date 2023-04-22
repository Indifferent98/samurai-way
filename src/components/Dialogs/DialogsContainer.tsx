import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";

import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

import {
  addMessageCreator,
  dialogsDataType,
  messageDataType,
  updateMessageTitleCreator,
} from "../../Redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

type DialogsContainer = {
  store: any;
};

export const DialogsContainer = (props: DialogsContainer): JSX.Element => {
  const state = props.store.getState();
  const addMessageTitleHandler = () => {
    const action = addMessageCreator();
    props.store.dispatch(action);
  };

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.currentTarget.value;
    const action = updateMessageTitleCreator(title);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      onChangeTextAreaHandler={onChangeTextAreaHandler}
      addMessageTitleHandler={addMessageTitleHandler}
      newMessageToMessagesTitle={state.messagesPage.newMessageToMessagesTitle}
      dialogsData={state.messagesPage.dialogsData}
      messageData={state.messagesPage.messageData}
    />
  );
};
