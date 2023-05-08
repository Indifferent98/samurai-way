import react from "react";

type addressType = {
  country: string;
  city: string;
};

type usersContainerType = {
  name: string;
  secondName: string;
  status: string;
  id: number;
  followStatus: boolean;
  address: addressType;
};
export type initialStateUsersType = {
  users: usersContainerType[];
};

const initialState: initialStateUsersType = {
  users: [
    {
      name: "Dimych",
      secondName: "EEE",
      address: {
        country: "Belarus",
        city: "Minsk",
      },
      id: 1111,

      status: "i am so pretty",
      followStatus: true,
    },
    {
      name: "Evgen",
      secondName: "R",
      address: {
        country: "Russia",
        city: "Moscow",
      },
      id: 141,

      status: "i am so good",
      followStatus: false,
    },
    {
      name: "Vladimir",
      secondName: "R",
      address: {
        country: "Russia",
        city: "ST-P",
      },
      id: 132,

      status: "js learn mood",
      followStatus: true,
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
  users: initialStateUsersType
): setUsersActionCreatorType => ({
  type: "SET-USERS",
  users: users.users,
});

type actionType = ChangeFollowActionCreatorType | setUsersActionCreatorType;

export const UsersReducer = (
  state: initialStateUsersType = initialState,
  action: actionType
): initialStateUsersType => {
  debugger;
  switch (action.type) {
    case "CHANGE-FOLLOW-STATUS":
      return {
        ...state,
        users: state.users.map((t) =>
          t.id === action.id ? { ...t, followStatus: !t.followStatus } : t
        ),
      };

    case "SET-USERS":
      debugger;
      return { ...state, users: [...action.users] };

    default:
      return state;
  }
};
