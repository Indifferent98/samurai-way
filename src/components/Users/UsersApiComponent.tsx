import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import { usersPropsType } from "./UsersContainer";

import { Users } from "./Users";
import { Preloader } from "../Preloader/Preloader";

export class UsersApiComponent extends React.Component<usersPropsType> {
  componentDidMount(): void {
    this.props.changePreloaderStatus(true);
    debugger;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`,
        this.settings
      )
      .then((response) => {
        setTimeout(() => {
          this.props.setUsers(response.data.items);
        }, 500);
        this.props.getTotalUsersCount(response.data.totalCount);
        this.props.changePreloaderStatus(false);
      })
      .catch(() => {
        setTimeout(() => {
          this.componentDidMount();
        }, 10000);
      });
  }
  componentWillUnmount(): void {}

  settings = {
    withCredentials: true,
    headers: { "API-KEY": "34d100b8-894d-4061-9da0-9a27cb217fe9" },
  };

  changeFollowStatus = (id: number) => {
    this.props.changeFollowStatus(id);
  };

  changeCurrentPage(pageNumber: number) {
    this.props.changePreloaderStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${pageNumber}`,
        this.settings
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.getTotalUsersCount(response.data.totalCount);
        this.props.changeUserPage(pageNumber);
        this.props.changePreloaderStatus(false);
      })
      .catch(() => {
        setTimeout(() => {
          this.changeCurrentPage(pageNumber);
        }, 10000);
      });
  }

  changeCurrentUserId(newId: number) {
    this.props.changeCurrentUserId(newId);
  }

  render() {
    return this.props.usersPage.preloaderIsActive ? (
      <>
        <div className={s.preloader}>
          <Preloader />
        </div>
      </>
    ) : (
      <Users
        usersPage={this.props.usersPage}
        changeFollowStatus={this.props.changeFollowStatus}
        changeCurrentPage={this.changeCurrentPage.bind(this)}
        changeCurrentUserId={this.changeCurrentUserId.bind(this)}
      />
    );
  }
}
