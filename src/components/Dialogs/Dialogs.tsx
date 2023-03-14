import React from "react";
import s from "./Dialogs.module.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { Timur } from "./DialogWith/Timur";
import { Igor } from "./DialogWith/Igor";
import { Maxim } from "./DialogWith/Maxim";
import { Stepan } from "./DialogWith/Stepan";
import { Vladimir } from "./DialogWith/Vladimir";

type DialogPropsType = {
  name: string;
  id: string;
};
const DialogItem = (props: DialogPropsType): JSX.Element => {
  let path = "/Dialogs/" + props.id;

  return (
    <NavLink to={path} className={s.dialogItems} activeClassName={s.active}>
      {props.name}
    </NavLink>
  );
};
type MessagePropsType = {
  message: string;
};
const Message = (props: MessagePropsType): JSX.Element => {
  return (
    <div className={s.messages}>
      <div className={s.message}>Hello Igor</div>
      <div className={s.message}>{props.message}</div>
      <div className={s.message}>How is your Learning</div>
    </div>
  );
};

export const Dialogs = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className={s.dialogs}>
        <div className={s.dialog}>
          <DialogItem name="Timur" id="1" />
          <DialogItem name="Vladimir" id="2" />
          <DialogItem name="Maxim" id="3" />
          <DialogItem name="Igor" id="4" />
          <DialogItem name="Stepan" id="5" />
        </div>

        <Message message="346546" />

        {/* <Route path={"/Dialogs/1"} component={Message }></Route>
        <Route path={"/Dialogs/4"} component={Message}></Route>
        <Route path={"/Dialogs/2"} component={Message}></Route>
        <Route path={"/Dialogs/3"} component={Message}></Route>
        <Route path={"/Dialogs/5"} component={Message}></Route> */}
      </div>
    </BrowserRouter>
  );
};
