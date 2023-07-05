import react from "react";
import { socialNetWorkApi } from "../DAL/socialNetWorkApi";
import { AppStateType } from "./Redux-store";
import { Dispatch } from "redux";

type addressType = {
  country: string;
  city: string;
};

type photosType = {
  small: null | string;
  large: null | string;
};

export type getUsersContainerType = {
  name: string;
  status: string | null;
  uniqueUrlName: null;
  id: number;
  photos: photosType;
  followed: boolean;
};

export type usersContainerType = getUsersContainerType & {
  followingInProgress: boolean;
};

export type initialStateUsersType = {
  users: usersContainerType[];
  pageSize: number;
  totalCount: number;
  currentPage: number;
  preloaderIsActive: boolean;
};

const initialState: initialStateUsersType = {
  users: [],
  pageSize: 100,
  totalCount: 0,
  currentPage: 1,
  preloaderIsActive: false,
};

type ChangeFollowACType = {
  type: "CHANGE-FOLLOW-STATUS";
  id: number;
  isFollowed: boolean;
};

export const ChangeFollowAC = (
  userId: number,
  isFollowed: boolean
): ChangeFollowACType => ({
  type: "CHANGE-FOLLOW-STATUS",
  id: userId,
  isFollowed,
});

type setUsersACType = ReturnType<typeof setUsersAC>;

export const setUsersAC = (users: getUsersContainerType[]) => {
  return {
    type: "SET-USERS",
    users: users,
  } as const;
};

type setTotalUsersCountACType = {
  usersCount: number;
  type: "SET-TOTAL-USERS-COUNT";
};

export const setTotalUsersCountAC = (
  usersCount: number
): setTotalUsersCountACType => ({
  usersCount,
  type: "SET-TOTAL-USERS-COUNT",
});

type changeCurrentPageACType = {
  type: "CHANGE-CURRENT-PAGE";
  newPage: number;
};

export const changeCurrentPageAC = (
  newPage: number
): changeCurrentPageACType => ({
  type: "CHANGE-CURRENT-PAGE",
  newPage,
});

type changePreloaderStatusAC = ReturnType<typeof changePreloaderStatusAC>;
export const changePreloaderStatusAC = (status: boolean) =>
  ({
    type: "CHANGE-PRELOADER-STATUS",
    status,
  } as const);

type changeFollowingInProgressStatusACType = ReturnType<
  typeof changeFollowingInProgressStatusAC
>;
export const changeFollowingInProgressStatusAC = (
  newStatus: boolean,
  userId: number
) =>
  ({ type: "CHANGE-FOLLOWING-IN-PROGRESS-STATUS", newStatus, userId } as const);

type actionType =
  | ChangeFollowACType
  | setUsersACType
  | setTotalUsersCountACType
  | changeCurrentPageACType
  | changePreloaderStatusAC
  | changeFollowingInProgressStatusACType;

export const UsersReducer = (
  state: initialStateUsersType = initialState,
  action: actionType
): initialStateUsersType => {
  switch (action.type) {
    case "CHANGE-FOLLOW-STATUS":
      return {
        ...state,
        users: state.users.map((t) =>
          t.id === action.id ? { ...t, followed: action.isFollowed } : t
        ),
      };

    case "SET-USERS":
      return {
        ...state,
        users: action.users.map((u) => ({ ...u, followingInProgress: false })),
      };

    case "SET-TOTAL-USERS-COUNT":
      return { ...state, totalCount: action.usersCount };

    case "CHANGE-CURRENT-PAGE":
      return { ...state, currentPage: action.newPage };

    case "CHANGE-PRELOADER-STATUS":
      return { ...state, preloaderIsActive: action.status };

    case "CHANGE-FOLLOWING-IN-PROGRESS-STATUS":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId
            ? { ...u, followingInProgress: action.newStatus }
            : u
        ),
      };

    default:
      return state;
  }
};

// export const unFollowUserTC = (userId: number) => (dispatch: Dispatch) => {
//   socialNetWorkApi.unFollowUser(userId).then(() => {
//     dispatch(ChangeFollowAC(userId));
//     dispatch(changeFollowingInProgressStatusAC(false, userId));
//   });
// };

// export const followUserTC = (userId: number) => (dispatch: Dispatch) => {
//   socialNetWorkApi.followUser(userId).then(() => {
//     dispatch(ChangeFollowAC(userId));
//     dispatch(changeFollowingInProgressStatusAC(false, userId));
//   });
// };

export const followUserTC =
  (userId: number, isFollow: boolean) => (dispatch: Dispatch) => {
    dispatch(changeFollowingInProgressStatusAC(true, userId));

    socialNetWorkApi.followUser(userId).then(() => {
      dispatch(ChangeFollowAC(userId, isFollow));
      dispatch(changeFollowingInProgressStatusAC(false, userId));
    });
  };

export const unFollowUserTC =
  (userId: number, isFollow: boolean) => (dispatch: Dispatch) => {
    dispatch(changeFollowingInProgressStatusAC(true, userId));

    socialNetWorkApi.unFollowUser(userId).then(() => {
      dispatch(ChangeFollowAC(userId, isFollow));
      dispatch(changeFollowingInProgressStatusAC(false, userId));
    });
  };

export const getUsersTC =
  (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(changePreloaderStatusAC(true));

    socialNetWorkApi.getUsers(pageSize, currentPage).then((response) => {
      dispatch(setUsersAC(response.data.items));
      dispatch(changeCurrentPageAC(currentPage));
      dispatch(setTotalUsersCountAC(response.data.totalCount));
      dispatch(changePreloaderStatusAC(false));
    });
  };
