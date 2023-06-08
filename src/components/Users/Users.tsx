import axios from "axios";
import React from "react";

import s from "./Users.module.css";
import { usersPropsType } from "./UsersContainer";
import { Preloader } from "../Preloader/Preloader";

export class UserClass extends React.Component<usersPropsType> {
  componentDidMount(): void {
    if (
      this.props.usersPage.users.length === 0 ||
      this.props.usersPage.users.length === 3
    )
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users?count=30")
        .then((response) => {
          setTimeout(() => {
            this.props.setUsers(response.data.items);
          }, 2000);
        });
  }

  changeFollowStatus = (id: number) => {
    this.props.changeFollowStatus(id);
  };

  render() {
    return !this.props.usersPage.users.length ||
      this.props.usersPage.users.length === 3 ? (
      <>
        users is loading <br /> <Preloader />
      </>
    ) : (
      <div>
        {this.props.usersPage.users.map((t) => (
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
                    this.changeFollowStatus(t.id);
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
  }
}
