import react from "react";

import {
  ChangeFollowAC,
  setTotalUsersCountAC,
  initialStateUsersType,
  setUsersAC,
  usersContainerType,
  changeCurrentPageAC,
  changePreloaderStatusAC,
} from "../../Redux/UsersReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { UsersApiComponent } from "./UsersApiComponent";
import { changeCurrentUserIdAC } from "../../Redux/profileReducer";

export type mapStateToPropsType = {
  usersPage: initialStateUsersType;
};

const mapStateToProps = (state: mapStateToPropsType) => ({
  usersPage: state.usersPage,
});

type mapDispatchToPropsType = {
  changeFollowStatus: (id: number) => void;
  setUsers: (users: usersContainerType[]) => void;
  getTotalUsersCount: (usersCount: number) => void;
  changeUserPage: (newPage: number) => void;
  changePreloaderStatus: (newStatus: boolean) => void;
  changeCurrentUserId: (newId: number) => void;
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
};

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType;

export const UsersContainter = connect(
  mapStateToProps,
  actionstObj
)(UsersApiComponent);
