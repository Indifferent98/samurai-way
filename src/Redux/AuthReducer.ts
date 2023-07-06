import { Dispatch } from "redux";
import { socialNetWorkApi } from "../DAL/socialNetWorkApi";
import { getUserProfileType } from "./profileReducer";
import react from "react";

export type initialStateType = requestDataType & {
  isFetching: boolean;
  isAuth: boolean;
  currentUserProfile: getUserProfileType;
};

const SET_USER_DATA = "SET-USER-DATA";
const CHANGE_CURRENT_USER_PROFILE = "CHANGE-CURRENT-USER-PROFILE";

type setAuthUserDataType = ReturnType<typeof setAuthUserData>;

type authActionsType = setAuthUserDataType | changeCurrentUserProfileType;

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
  currentUserProfile: {
    contacts: {
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
    },
    userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    photos: {
      large: "",
      small: "",
    },
  },
};

type changeCurrentUserProfileType = ReturnType<typeof changeCurrentUserProfile>;

export const changeCurrentUserProfile = (currentProfile: getUserProfileType) =>
  ({
    type: CHANGE_CURRENT_USER_PROFILE,
    currentProfile,
  } as const);

export const AuthReducer = (
  state: initialStateType = initialState,
  action: authActionsType
) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };

    case CHANGE_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: {
          ...state.currentUserProfile,
          ...action.currentProfile,
        },
      };

    default:
      return { ...state };
  }
};

export const setAuthChangeProfile = () => (dispatch: Dispatch) => {
  socialNetWorkApi
    .getAuth()
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(res.data.data));

        return res.data.data.id;
      } else {
        return new Promise((res, rej) => {
          rej();
        });
      }
    })
    .then((id) => {
      return socialNetWorkApi.getProfile(id ? Number(id) : 9999999);
    })
    .then((data) => {
      dispatch(changeCurrentUserProfile(data.data));
    });
};
