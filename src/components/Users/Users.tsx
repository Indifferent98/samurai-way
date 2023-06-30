import React, { ChangeEvent, useState } from "react";
import s from "./Users.module.css";
import { Preloader } from "../Preloader/Preloader";

import { initialStateUsersType } from "../../Redux/UsersReducer";
import { PaginationButtons } from "./PaginationButtons/PaginationButtons";
import { NavLink } from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
  usersPage: initialStateUsersType;
  changeFollowStatus: (id: number) => void;
  changeCurrentPage: (pageNumber: number) => void;
  changeCurrentUserId: (newId: number) => void;
};

export const Users = (props: UsersPropsType) => {
  const [newPage, setNewPage] = useState(props.usersPage.currentPage);
  const onClickPageHandler = () => {
    props.changeCurrentPage(newPage);
  };
  const onChangePageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPage(+e.currentTarget.value);
  };

  const settings = {
    withCredentials: true,
    headers: { "API-KEY": "34d100b8-894d-4061-9da0-9a27cb217fe9" },
  };

  return (
    <div>
      <div className={s.pageButton}>
        <div>
          {" "}
          change page{" "}
          <input type="number" value={newPage} onChange={onChangePageHandler} />
          <button onClick={onClickPageHandler}>+</button>
        </div>
        <PaginationButtons
          totalCount={props.usersPage.totalCount}
          pageSize={props.usersPage.pageSize}
          currentPage={props.usersPage.currentPage}
          changeCurrentPage={props.changeCurrentPage}
        />
      </div>
      {props.usersPage.users.map((t) => (
        <div key={t.id} className={s.user}>
          <div className={s.avatar}>
            <div>
              <NavLink to={`/Profile/${t.id}`}>
                <img
                  // onClick={() => {
                  //
                  //   props.changeCurrentUserId(t.id);
                  // }}
                  className={s.img}
                  src={
                    t.photos.small
                      ? t.photos.small
                      : "https://static.vecteezy.com/system/resources/previews/013/659/682/non_2x/human-avatar-user-ui-account-square-clip-art-icon-vector.jpg"
                  }
                  alt="here must be avatar"
                />
              </NavLink>
            </div>
            <div>
              <button
                onClick={() => {
                  if (t.followed) {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${t.id}`,
                        settings
                      )
                      .then(() => {
                        props.changeFollowStatus(t.id);
                      });
                  } else {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${t.id}`,
                        {},
                        settings
                      )
                      .then(() => {
                        props.changeFollowStatus(t.id);
                      });
                  }
                }}
                className={s.follow}
                style={{
                  background: t.followed
                    ? "rgb(17, 144, 59)"
                    : "rgb(117, 108, 108)",
                }}
              >
                {t.followed ? "Follow " : "Unfollow "}
              </button>
            </div>
          </div>
          <div className={s.board}>
            <div className={s.nameStatus}>
              <div className={s.name}>
                {t.name}
                {/* {t.secondName[0] + "."} */}
              </div>
              <div>{t.status}</div>
            </div>
            <div className={s.address}>
              <div>{"t.address.country"}</div>
              <div>{"t.address.city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
