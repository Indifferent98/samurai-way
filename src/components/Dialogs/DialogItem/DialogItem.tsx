import React from "react";
import s from "./../Dialogs.module.css";

import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  name: string;
  id: string;
};
export const DialogItem = (props: DialogItemPropsType): JSX.Element => {
  const path = "/Messages/" + props.id;

  return (
    <NavLink to={path} className={s.dialogItems} activeClassName={s.active}>
      {props.name}
    </NavLink>
  );
};
