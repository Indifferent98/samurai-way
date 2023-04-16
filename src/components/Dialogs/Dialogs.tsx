import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";

import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import {
  ActionAddMessageType,
  ActionUpdateMessageTitleType,
  dialogsDataArrayType,
  dispatchActionTypes,
} from "../../Redux/state";
import { messageDataType } from "../../Redux/state";

type DialogsPropsType = {
  state: {
    dialogsData: dialogsDataArrayType[];
    messageData: messageDataType[];
  };
  // addMessage: () => void;
  // updateMessageTitle: (title: string) => void;
  dispatch: (action: dispatchActionTypes) => void;
  newMessageToMessagesTitle: string;
};

export const Dialogs = (props: DialogsPropsType): JSX.Element => {
  const dialogsDataForApplication = props.state.dialogsData.map((t) => (
    <DialogItem name={t.name} id={t.id.toString()} />
  ));
  const messageDataForApplication = props.state.messageData.map((t) => (
    <Message messageData={t.message} />
  ));

  const addMessageTitleHandler = () => {
    const action: ActionAddMessageType = { type: "ADD-MESSAGE" };
    props.dispatch(action);
  };
  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const action: ActionUpdateMessageTitleType = {
      type: "UPDATE-MESSAGE-TITLE",
      title: e.currentTarget.value,
    };
    props.dispatch(action);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>{dialogsDataForApplication}</div>
      <div className={s.message}>
        {messageDataForApplication}
        {/* GROW DIV ATTENTION */}
        <div className={s.growDiv}></div>
        {/* GROW DIV ATTENTION */}
        <div className={s.handler}>
          <textarea
            onChange={onChangeTextAreaHandler}
            value={props.newMessageToMessagesTitle}
          ></textarea>
          <button onClick={addMessageTitleHandler}>Send Message</button>
        </div>
      </div>
    </div>
  );
};
