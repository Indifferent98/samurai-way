import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        <NavLink
          to="/Dialogs/Timur"
          className={s.dialogItems}
          activeClassName={s.active}
        >
          Timur
        </NavLink>
        <NavLink
          to="/Dialogs/Vladimir"
          className={s.dialogItems}
          activeClassName={s.active}
        >
          Vladimir
        </NavLink>
        <NavLink
          to="/Dialogs/Maxim"
          activeClassName={s.active}
          className={s.dialogItems}
        >
          Maxim
        </NavLink>
        <NavLink to="/Dialogs/Igor" className={s.dialogItems}>
          Igor
        </NavLink>
        <NavLink
          to="/Dialogs/Stepan"
          className={s.dialogItems}
          activeClassName={s.active}
        >
          Stepan
        </NavLink>
      </div>

      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>How Are You</div>
        <div className={s.message}>How is your Learning</div>
      </div>
    </div>
  );
};
