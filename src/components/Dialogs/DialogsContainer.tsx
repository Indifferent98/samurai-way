import React, { ChangeEvent } from "react";

import {
  addMessageCreator,
  initialStateDialogsType,
  updateMessageTitleCreator,
} from "../../Redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";

import { Dispatch } from "redux";
import { initialStateType } from "../../Redux/AuthReducer";

type mapStateToPropsType = {
  messagesPage: initialStateDialogsType;
  auth: initialStateType;
};

type mapDispatchToPropsType = {
  onChangeTextAreaHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  addMessageTitleHandler: () => void;
};

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: mapStateToPropsType): mapStateToPropsType => {
  return {
    messagesPage: state.messagesPage,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    onChangeTextAreaHandler: (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(updateMessageTitleCreator(e.currentTarget.value));
    },
    addMessageTitleHandler: () => {
      dispatch(addMessageCreator());
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
