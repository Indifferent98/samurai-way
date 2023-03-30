import React from "react";
import s from "./Dialogs.module.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { Timur } from "./DialogWith/Timur";
import { Igor } from "./DialogWith/Igor";
import { Maxim } from "./DialogWith/Maxim";
import { Stepan } from "./DialogWith/Stepan";
import { Vladimir } from "./DialogWith/Vladimir";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { dialogsDataArrayType } from "../../Redux/state";
import { messageDataType } from "../../Redux/state";
//типизировать пропсы
type DialogsPropsType = {
  state: {
    dialogsData: dialogsDataArrayType[];
    messageData: messageDataType[];
  };
  addMessage: (title: string) => void;
};

export const Dialogs = (props: DialogsPropsType): JSX.Element => {
  debugger;
  // const dialogsData: dialogsDataArrayType[] = [
  //   { id: 1, name: "Timur" },
  //   { id: 2, name: "Vladimir" },
  //   { id: 3, name: "Maxim" },
  //   { id: 4, name: "Igor" },
  //   { id: 5, name: "Stepan" },
  // ];
  // const messageData: messageDataArrayType[] = [
  //   { id: 1, message: "Hmmm" },
  //   { id: 2, message: "Butter" },
  //   { id: 3, message: "Milk" },
  //   { id: 4, message: "Bread" },
  //   { id: 5, message: "Tost" },
  // ];

  const dialogsDataForApplication = props.state.dialogsData.map((t) => (
    <DialogItem name={t.name} id={t.id.toString()} />
  ));
  const messageDataForApplication = props.state.messageData.map((t) => (
    <Message messageData={t.message} />
  ));

  const messageTitle = React.createRef<HTMLTextAreaElement>();
  const addMessageTitleHandler = () => {
    if (messageTitle.current) {
      let title = messageTitle.current.value;
      props.addMessage(title);
      messageTitle.current.value = "";
    }
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
          <textarea ref={messageTitle} name="" id=""></textarea>
          <button onClick={addMessageTitleHandler}>Send Message</button>
        </div>
      </div>

      {/* <Route path={"/Dialogs/1"} component={Message }></Route>
        <Route path={"/Dialogs/4"} component={Message}></Route>
        <Route path={"/Dialogs/2"} component={Message}></Route>
        <Route path={"/Dialogs/3"} component={Message}></Route>
        <Route path={"/Dialogs/5"} component={Message}></Route> */}
    </div>
  );
};
