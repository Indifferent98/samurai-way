import React from "react";
import { dispatchActionTypes, store } from "./state";

const initialState = [
  "Profile",
  "Messages",
  "News",
  "Music",
  "Settings",
] as string[];
type initialStateType = typeof initialState;

export const navBarReducer = (
  state: initialStateType = initialState,
  action: dispatchActionTypes
): initialStateType => {
  return state;
};
