import react from "react";

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
};

export const ChangeFollowAC = (userId: number): ChangeFollowACType => ({
  type: "CHANGE-FOLLOW-STATUS",
  id: userId,
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

type actionType =
  | ChangeFollowACType
  | setUsersACType
  | setTotalUsersCountACType
  | changeCurrentPageACType
  | changePreloaderStatusAC;

export const UsersReducer = (
  state: initialStateUsersType = initialState,
  action: actionType
): initialStateUsersType => {
  switch (action.type) {
    case "CHANGE-FOLLOW-STATUS":
      return {
        ...state,
        users: state.users.map((t) =>
          t.id === action.id ? { ...t, followed: !t.followed } : t
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

    default:
      return state;
  }
};
