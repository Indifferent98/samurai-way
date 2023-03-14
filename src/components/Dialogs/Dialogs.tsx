import React from "react";
import s from "./Dialogs.module.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { Timur } from "./DialogWith/Timur";
import { Igor } from "./DialogWith/Igor";
import { Maxim } from "./DialogWith/Maxim";
import { Stepan } from "./DialogWith/Stepan";
import { Vladimir } from "./DialogWith/Vladimir";
export const Dialogs = () => {
  return (
    <BrowserRouter>
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
          <NavLink
            to="/Dialogs/Igor"
            activeClassName={s.active}
            className={s.dialogItems}
          >
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

        <Route path={"/Dialogs/Timur"} component={Timur}></Route>
        <Route path={"/Dialogs/Igor"} component={Igor}></Route>
        <Route path={"/Dialogs/Vladimir"} component={Vladimir}></Route>
        <Route path={"/Dialogs/Maxim"} component={Maxim}></Route>
        <Route path={"/Dialogs/Stepan"} component={Stepan}></Route>
      </div>
    </BrowserRouter>
  );
};
