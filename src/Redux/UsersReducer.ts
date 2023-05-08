import react from "react";

type addressType = {
  country: string;
  city: string;
};

type photosType = {
  small: null | string;
  large: null | string;
};

export type usersContainerType = {
  name: string;
  // secondName: string;
  status: string | null;
  uniqueUrlName: null;
  id: number;
  photos: photosType;
  followed: boolean;
  // address: addressType;
};
export type initialStateUsersType = {
  users: usersContainerType[];
};

const initialState: initialStateUsersType = {
  users: [
    {
      name: "Dimych",

      id: 1111,

      status: "i am so pretty",
      followed: true,
      photos: { small: null, large: null },
      uniqueUrlName: null,
    },
    {
      name: "Evgen",

      id: 141,

      status: "i am so good",
      followed: false,
      photos: { small: null, large: null },
      uniqueUrlName: null,
    },

    {
      name: "Vladimir",

      id: 132,

      status: "js learn mood",
      followed: true,
      photos: { small: null, large: null },
      uniqueUrlName: null,
    },
  ],
};

type ChangeFollowActionCreatorType = {
  type: "CHANGE-FOLLOW-STATUS";
  id: number;
};

export const ChangeFollowActionCreator = (
  userId: number
): ChangeFollowActionCreatorType => ({
  type: "CHANGE-FOLLOW-STATUS",
  id: userId,
});

type setUsersActionCreatorType = {
  type: "SET-USERS";
  users: usersContainerType[];
};
export const setUsersActionCreator = (
  users: usersContainerType[]
): setUsersActionCreatorType => {
  debugger;
  return {
    type: "SET-USERS",
    users: users,
  };
};

type actionType = ChangeFollowActionCreatorType | setUsersActionCreatorType;

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
      debugger;
      return { ...state, users: [...action.users] };

    default:
      return state;
  }
};
