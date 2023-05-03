import React from "react";
import { dispatchActionTypes, store } from "./Redux-store";

const initialState: initialStateNavType = [
  "Profile",
  "Messages",
  "News",
  "Music",
  "Users",
  "Settings",
];
export type initialStateNavType = string[];

export const navBarReducer = (
  state: initialStateNavType = initialState,
  action: dispatchActionTypes
): initialStateNavType => {
  return state;
};
