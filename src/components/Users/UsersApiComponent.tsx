import axios from "axios";
import React from "react";

import { usersPropsType } from "./UsersContainer";

import { Users } from "./Users";

export class UsersApiComponent extends React.Component<usersPropsType> {
  componentDidMount(): void {
    this.props.changePreloaderStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`
      )
      .then((response) => {
        setTimeout(() => {
          this.props.setUsers(response.data.items);
        }, 500);
        this.props.getTotalUsersCount(response.data.totalCount);
        this.props.changePreloaderStatus(false);
      });
  }
  componentWillUnmount(): void {}

  changeFollowStatus = (id: number) => {
    this.props.changeFollowStatus(id);
  };

  changeCurrentPage(pageNumber: number) {
    this.props.changePreloaderStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.getTotalUsersCount(response.data.totalCount);
        this.props.changeUserPage(pageNumber);
        this.props.changePreloaderStatus(false);
      });
  }

  render() {
    return (
      <Users
        usersPage={this.props.usersPage}
        changeFollowStatus={this.props.changeFollowStatus}
        changeCurrentPage={this.changeCurrentPage.bind(this)}
      />
    );
  }
}
