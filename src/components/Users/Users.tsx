import axios from "axios";
import React from "react";

import s from "./Users.module.css";
import { usersPropsType } from "./UsersContainer";
import { Preloader } from "../Preloader/Preloader";

export class Users extends React.Component<usersPropsType> {
  componentDidMount(): void {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`
      )
      .then((response) => {
        console.log(
          `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`
        );
        setTimeout(() => {
          this.props.setUsers(response.data.items);
        }, 500);
        this.props.getTotalUsersCount(response.data.totalCount);
      });
  }
  componentWillUnmount(): void {}
  // shouldComponentUpdate(
  //   nextProps: Readonly<usersPropsType>,
  //   nextState: Readonly<{}>,
  //   nextContext: any
  // ): boolean {
  //   return nextProps.usersPage.currentPage !== this.props.usersPage.currentPage;
  // }

  componentDidUpdate(
    prevProps: Readonly<usersPropsType>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (prevProps.usersPage.currentPage !== this.props.usersPage.currentPage) {
    }
  }
  // componentDidUpdate(

  // ): void {
  //
  // }
  changeFollowStatus = (id: number) => {
    this.props.changeFollowStatus(id);
  };

  changePage(pageNumber: number) {
    this.props.changeUserPage(pageNumber);
    console.log(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`
    );
  }

  render() {
    let pagesCount =
      this.props.usersPage.totalCount / this.props.usersPage.pageSize;
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return this.props.usersPage.users.length <= 3 ? (
      <>
        users is loading <br /> <Preloader />
      </>
    ) : (
      <div>
        <button
          onClick={() => {
            console.log(this);
            this.render();
          }}
        >
          dsfgdfgsdf
        </button>
        <div className={s.pageButton}>
          {pages.map((u) => (
            <span
              onClick={() => {
                this.changePage(u);
              }}
              className={
                u === this.props.usersPage.currentPage ? s.currentPage : ""
              }
            >
              {u}{" "}
            </span>
          ))}
        </div>
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
