import React from "react";

import s from "./../Dialogs.module.css";
import { MessagePropsType } from "../../..";
export const Message = (props: MessagePropsType): JSX.Element => {
  return (
    <div className={s.messages}>
      {/* <div className={s.message}>Hello Igor</div> */}
      <div className={s.message}>{props.messageData}</div>
      {/* <div className={s.message}>How is your Learning</div> */}
    </div>
  );
};
