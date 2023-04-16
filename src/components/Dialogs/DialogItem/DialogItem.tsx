import React from "react";
import s from "./../Dialogs.module.css";

import { NavLink } from "react-router-dom";
import { DialogPropsType } from "../../../Redux/state";

export const DialogItem = (props: DialogPropsType): JSX.Element => {
  const path = "/Messages/" + props.id;

  return (
    <NavLink to={path} className={s.dialogItems} activeClassName={s.active}>
      {props.name}
    </NavLink>
  );
};
