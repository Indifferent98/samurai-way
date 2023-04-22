import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";

import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { dispatchActionTypes } from "../../Redux/Redux-store";

import {
  addMessageCreator,
  dialogsDataType,
  messageDataType,
  updateMessageTitleCreator,
} from "../../Redux/dialogsReducer";

type DialogsPropsType = {
  state: {
    dialogsData: dialogsDataType[];
    messageData: messageDataType[];
  };
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
    const action = addMessageCreator();
    props.dispatch(action);
  };

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const title = e.currentTarget.value;
    const action = updateMessageTitleCreator(title);
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
            placeholder={"Enter your message"}
            onChange={onChangeTextAreaHandler}
            value={props.newMessageToMessagesTitle}
          ></textarea>
          <button onClick={addMessageTitleHandler}>Send Message</button>
        </div>
      </div>
    </div>
  );
};
