import react from "react";

import {
  ChangeFollowActionCreator,
  initialStateUsersType,
  setUsersActionCreator,
  usersContainerType,
} from "../../Redux/UsersReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Users } from "./Users";

type mapStateToPropsType = {
  usersPage: initialStateUsersType;
};

const mapStateToProps = (state: mapStateToPropsType) => ({
  usersPage: state.usersPage,
});

type mapDispatchToPropsType = {
  changeFollowStatus: (id: number) => void;
  setUsers: (users: usersContainerType[]) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    changeFollowStatus: (id: number) => {
      dispatch(ChangeFollowActionCreator(id));
    },
    setUsers: (users) => {
      debugger;
      dispatch(setUsersActionCreator(users));
    },
  };
};

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType;

export const UsersContainter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
