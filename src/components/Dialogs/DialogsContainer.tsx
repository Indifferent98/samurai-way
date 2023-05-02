import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";

import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

import {
  addMessageCreator,
  dialogsDataType,
  initialStateDialogsType,
  messageDataType,
  updateMessageTitleCreator,
} from "../../Redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType, dispatchActionTypes } from "../../Redux/Redux-store";

// export const DialogsContainer = (): JSX.Element => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState();
//         const addMessageTitleHandler = () => {
//           store.dispatch(addMessageCreator());
//         };

//         const onChangeTextAreaHandler = (e: ChangeEvent<HTMLInputElement>) => {
//           store.dispatch(updateMessageTitleCreator(e.currentTarget.value));
//         };
//         return (
//           <Dialogs
//             onChangeTextAreaHandler={onChangeTextAreaHandler}
//             addMessageTitleHandler={addMessageTitleHandler}
//             messagePage={store.getState().messagePage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

type mapStateToPropsType = {
  messagesPage: initialStateDialogsType;
};

const mapStateToProps = (state: mapStateToPropsType) => {
  return {
    messagesPage: state.messagesPage,
  };
};

const mapDispatchToProps = (dispatch: any) => {
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
