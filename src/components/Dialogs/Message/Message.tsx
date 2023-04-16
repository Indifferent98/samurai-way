import React from "react";

import s from "./../Dialogs.module.css";

export type MessagePropsType = {
  messageData: string;
};
export const Message = (props: MessagePropsType): JSX.Element => {
  return (
    <div className={s.messages}>
      <div className={s.message}>{props.messageData}</div>
    </div>
  );
};
