import react from "react";

import {
  ChangeFollowActionCreator,
  setTotalUsersCountAC,
  initialStateUsersType,
  setUsersActionCreator,
  usersContainerType,
  changeCurrentPageAC,
} from "../../Redux/UsersReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { UsersApiComponent } from "./UsersApiComponent";

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
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    changeFollowStatus: (id: number) => {
      dispatch(ChangeFollowActionCreator(id));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    getTotalUsersCount: (usersCount: number) => {
      dispatch(setTotalUsersCountAC(usersCount));
    },
    changeUserPage: (newPage: number) => {
      dispatch(changeCurrentPageAC(newPage));
    },
  };
};

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType;

export const UsersContainter = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiComponent);
