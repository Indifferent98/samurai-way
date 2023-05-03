import react from "react";
import { Users } from "./Users";
import {
  ChangeFollowActionCreator,
  initialStateUsersType,
} from "../../Redux/UsersReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";

type mapStateToPropsType = {
  usersPage: initialStateUsersType;
};

const mapStateToProps = (state: mapStateToPropsType) => ({
  usersPage: state.usersPage,
});

type mapDispatchToPropsType = {
  changeFollowStatus: (id: number) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    changeFollowStatus: (id: number) => {
      dispatch(ChangeFollowActionCreator(id));
    },
  };
};

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType;

export const UsersContainter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
