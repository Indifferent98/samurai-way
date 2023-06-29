import react from "react";

export type initialStateType = requestDataType & {
  isFetching: boolean;
  isAuth: boolean;
};

const SET_USER_DATA = "SET-USER-DATA";

type setAuthUserDataType = ReturnType<typeof setAuthUserData>;

type authActionsType = setAuthUserDataType;

export const setAuthUserData = (data: requestDataType) =>
  ({
    type: SET_USER_DATA,
    data,
  } as const);

export type requestDataType = { id: number; email: string; login: string };

const initialState: initialStateType = {
  id: 0,
  email: "",
  login: "",
  isAuth: false,
  isFetching: false,
};

export const AuthReducer = (
  state: initialStateType = initialState,
  action: authActionsType
) => {
  switch (action.type) {
    case SET_USER_DATA:
      debugger;
      return { ...state, ...action.data, isAuth: true };

    default:
      return { ...state };
  }
};
