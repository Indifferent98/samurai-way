import react from "react";

import {
  ChangeFollowAC,
  setTotalUsersCountAC,
  initialStateUsersType,
  setUsersAC,
  getUsersContainerType,
  changeCurrentPageAC,
  changePreloaderStatusAC,
  changeFollowingInProgressStatusAC,
  // followUserTC,
  // unFollowUserTC,
  getUsersTC,
  followUserTC,
  unFollowUserTC,
} from "../../Redux/UsersReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { UsersApiComponent } from "./UsersApiComponent";
import { changeCurrentUserIdAC } from "../../Redux/profileReducer";
import { AppStateType } from "../../Redux/Redux-store";

export type mapStateToPropsType = {
  usersPage: initialStateUsersType;
};

const mapStateToProps = (state: mapStateToPropsType) => ({
  usersPage: state.usersPage,
});

type mapDispatchToPropsType = {
  // followUserTC: (userId: number) => void;
  // unFollowUserTC: (userId: number) => void;
  getUsers: (pageSize: number, currentPage: number) => void;
  changeFollowStatus: (id: number, newFollowStatus: boolean) => void;
  setUsers: (users: getUsersContainerType[]) => void;
  getTotalUsersCount: (usersCount: number) => void;
  changeUserPage: (newPage: number) => void;
  changePreloaderStatus: (newStatus: boolean) => void;
  changeCurrentUserId: (newId: number) => void;
  changeFollowingInProgressStatus: (newStatus: boolean, userId: number) => void;
  followUser: (userId: number, newFollowStatus: boolean) => void;
  unFollowUser: (userId: number, newFollowStatus: boolean) => void;
};

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//   return {
//     changeFollowStatus: (id: number) => {
//       dispatch(ChangeFollowAC(id));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     getTotalUsersCount: (usersCount: number) => {
//       dispatch(setTotalUsersCountAC(usersCount));
//     },
//     changeUserPage: (newPage: number) => {
//       dispatch(changeCurrentPageAC(newPage));
//     },
//     changePreloaderStatus: (newStatus: boolean) => {
//       dispatch(changePreloaderStatusAC(newStatus));
//     },
//   };
// };

const actionstObj = {
  changeFollowStatus: ChangeFollowAC,
  setUsers: setUsersAC,
  getTotalUsersCount: setTotalUsersCountAC,
  changeUserPage: changeCurrentPageAC,
  changePreloaderStatus: changePreloaderStatusAC,
  changeCurrentUserId: changeCurrentUserIdAC,
  changeFollowingInProgressStatus: changeFollowingInProgressStatusAC,
  // followUser: followUserTC,
  // unFollowUser: unFollowUserTC,
  getUsers: getUsersTC,
  followUser: followUserTC,
  unFollowUser: unFollowUserTC,
};

// export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType;
export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType;

export const UsersContainter = connect(
  mapStateToProps,
  actionstObj
)(UsersApiComponent);
