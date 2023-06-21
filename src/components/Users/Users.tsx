import React from "react";
import s from "./Users.module.css";
import { Preloader } from "../Preloader/Preloader";
import { mapStateToPropsType } from "./UsersContainer";
import { initialStateUsersType } from "../../Redux/UsersReducer";

type UsersPropsType = {
  usersPage: initialStateUsersType;
  changeFollowStatus: (id: number) => void;
  changeCurrentPage: (pageNumber: number) => void;
};

export const Users = (props: UsersPropsType) => {
  let pagesCount = Math.ceil(
    props.usersPage.totalCount / props.usersPage.pageSize
  );
  let pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  console.log(props);
  return props.usersPage.users.length <= 3 ? (
    <>
      users is loading <br /> <Preloader />
    </>
  ) : (
    <div>
      <div className={s.pageButton}>
        {pages.map((u) => {
          const changeCurrentPage = () => {
            props.changeCurrentPage(u);
          };
          return (
            <span
              onClick={changeCurrentPage}
              className={u === props.usersPage.currentPage ? s.currentPage : ""}
            >
              {u}{" "}
            </span>
          );
        })}
      </div>
      {props.usersPage.users.map((t: any) => (
        <div key={t.id} className={s.user}>
          <div className={s.avatar}>
            <div>
              <img
                className={s.img}
                src={
                  t.photos.small
                    ? t.photos.small
                    : "https://static.vecteezy.com/system/resources/previews/013/659/682/non_2x/human-avatar-user-ui-account-square-clip-art-icon-vector.jpg"
                }
                alt="here must be avatar"
              />
            </div>
            <div>
              <button
                onClick={() => {
                  props.changeFollowStatus(t.id);
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
