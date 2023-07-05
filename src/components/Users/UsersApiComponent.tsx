import React from "react";
import s from "./Users.module.css";
import { usersPropsType } from "./UsersContainer";

import { Users } from "./Users";
import { Preloader } from "../Preloader/Preloader";
import { socialNetWorkApi } from "../../DAL/socialNetWorkApi";

export class UsersApiComponent extends React.Component<usersPropsType> {
  componentDidMount(): void {
    this.props.getUsers(
      this.props.usersPage.pageSize,
      this.props.usersPage.currentPage
    );
  }
  componentWillUnmount(): void {}

  followUser(userId: number, isFollow: boolean) {
    this.props.followUser(userId, isFollow);
  }
  unFollowUser(userId: number, isFollow: boolean) {
    this.props.unFollowUser(userId, isFollow);
  }

  settings = {
    withCredentials: true,
    headers: { "API-KEY": "34d100b8-894d-4061-9da0-9a27cb217fe9" },
  };

  changeFollowStatus = (id: number, isFollow: boolean) => {
    this.props.changeFollowStatus(id, isFollow);
  };

  changeCurrentPage(pageNumber: number) {
    this.props.getUsers(this.props.usersPage.pageSize, pageNumber);
  }

  changeFollowingInProgressStatus(newStatus: boolean, userId: number) {
    this.props.changeFollowingInProgressStatus(newStatus, userId);
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
        changeFollowingInProgressStatus={this.changeFollowingInProgressStatus.bind(
          this
        )}
        followUser={this.followUser.bind(this)}
        unFollowUser={this.unFollowUser.bind(this)}
        usersPage={this.props.usersPage}
        changeFollowStatus={this.props.changeFollowStatus}
        changeCurrentPage={this.changeCurrentPage.bind(this)}
        changeCurrentUserId={this.changeCurrentUserId.bind(this)}
      />
    );
  }
}
