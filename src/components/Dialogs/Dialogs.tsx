import React from "react";
import s from "./Dialogs.module.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { Timur } from "./DialogWith/Timur";
import { Igor } from "./DialogWith/Igor";
import { Maxim } from "./DialogWith/Maxim";
import { Stepan } from "./DialogWith/Stepan";
import { Vladimir } from "./DialogWith/Vladimir";

type MessagePropsType = {
  messageData: string;
};
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

const Message = (props: MessagePropsType): JSX.Element => {
  return (
    <div className={s.messages}>
      {/* <div className={s.message}>Hello Igor</div> */}
      <div className={s.message}>{props.messageData}</div>
      {/* <div className={s.message}>How is your Learning</div> */}
    </div>
  );
};

type dialogsDataArrayType = {
  id: number;
  name: string;
};
export type messageDataArrayType = {
  id: number;
  message: string;
};

//типизировать пропсы
export const Dialogs = (props: any): JSX.Element => {
  let dialogsData: dialogsDataArrayType[] = [
    { id: 1, name: "Timur" },
    { id: 2, name: "Vladimir" },
    { id: 3, name: "Maxim" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Stepan" },
  ];
  let messageData: messageDataArrayType[] = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "How Are you" },
    { id: 4, message: "Fine" },
    { id: 5, message: "Lets found smth" },
  ];
  return (
    <BrowserRouter>
      <div className={s.dialogs}>
        <div className={s.dialog}>
          <DialogItem
            name={dialogsData[0].name}
            id={dialogsData[0].id.toString()}
          />
          <DialogItem
            name={dialogsData[1].name}
            id={dialogsData[1].id.toString()}
          />
          <DialogItem
            name={dialogsData[2].name}
            id={dialogsData[2].id.toString()}
          />
          <DialogItem
            name={dialogsData[3].name}
            id={dialogsData[3].id.toString()}
          />
          <DialogItem
            name={dialogsData[4].name}
            id={dialogsData[4].id.toString()}
          />
        </div>
        <div className={s.message}>
          <Message messageData={messageData[0].message} />
          <Message messageData={messageData[1].message} />
          <Message messageData={messageData[2].message} />
          <Message messageData={messageData[3].message} />
          <Message messageData={messageData[4].message} />
        </div>
        {/* <Route path={"/Dialogs/1"} component={Message }></Route>
        <Route path={"/Dialogs/4"} component={Message}></Route>
        <Route path={"/Dialogs/2"} component={Message}></Route>
        <Route path={"/Dialogs/3"} component={Message}></Route>
        <Route path={"/Dialogs/5"} component={Message}></Route> */}
      </div>
    </BrowserRouter>
  );
};
