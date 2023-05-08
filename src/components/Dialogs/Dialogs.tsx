import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";

import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

import { DialogsPropsType } from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType): JSX.Element => {
  const dialogsDataForApplication = props.messagesPage.dialogsData.map((t) => (
    <DialogItem name={t.name} key={t.id} id={t.id.toString()} />
  ));

  const messageDataForApplication = props.messagesPage.messageData.map((t) => (
    <Message key={t.id} messageData={t.message} />
  ));

  const addMessageTitleHandler = () => {
    props.addMessageTitleHandler();
  };

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChangeTextAreaHandler(e);
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
          <input
            placeholder={"Enter your message"}
            onChange={onChangeTextAreaHandler}
            value={props.messagesPage.newMessageToMessagesTitle}
          ></input>
          <button onClick={addMessageTitleHandler}>Send Message</button>
        </div>
      </div>
    </div>
  );
};
