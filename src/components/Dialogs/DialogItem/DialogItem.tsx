import React from "react";
import s from "./../Dialogs.module.css";

import { NavLink } from "react-router-dom";
import { DialogPropsType } from "../../..";

export const DialogItem = (props: DialogPropsType): JSX.Element => {
  let path = "/Dialogs/" + props.id;

  return (
    <NavLink to={path} className={s.dialogItems} activeClassName={s.active}>
      {props.name}
    </NavLink>
  );
};
