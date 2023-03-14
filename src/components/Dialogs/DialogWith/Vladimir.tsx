import React from "react";
import s from "..//Dialogs.module.css";
export const Vladimir = (): JSX.Element => {
  return (
    <div className={s.messages}>
      <div className={s.message}>Hello Vladimir</div>
      <div className={s.message}>How Are You</div>
      <div className={s.message}>How is your Learning</div>
    </div>
  );
};
