import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { dispatchActionTypes, store } from "../../../Redux/Redux-store";
import {
  addPostActionCreator,
  myPostsDataType,
  updatePostTitleActionCreator,
} from "../../../Redux/profileReducer";
import { MyPosts } from "./MyPosts";
// import { StoreContext } from "../../../StoreContext";
import { connect } from "react-redux";

// export const MyPostsContainer = (): JSX.Element => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState();

//         const addPostButtonHandler = () => {
//           const action = addPostActionCreator();
//           store.dispatch(action);
//         };

//         const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//           const title = e.currentTarget.value;
//           const action = updatePostTitleActionCreator(title);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             onPostChangeHandler={onPostChangeHandler}
//             myPostsData={state.profilePage.myPostsData}
//             addPostButtonHandler={addPostButtonHandler}
//             newPostProfileTitle={state.profilePage.newPostProfileTitle}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state: any) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPostChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updatePostTitleActionCreator(e.currentTarget.value));
    },
    addPostButtonHandler: () => {
      dispatch(addPostActionCreator());
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
