import axios from "axios";
import React from "react";
import { getUserProfileType } from "../Redux/profileReducer";
import { responseType } from "../components/header/HeaderContainer";
import { usersContainerType } from "../Redux/UsersReducer";
import { requestDataType } from "../Redux/AuthReducer";

type getUsersType = { items: usersContainerType[] } & {
  totalCount: number;
  error: null | string;
};

type authMeRequestType = {
  data: requestDataType;
  messages: string[];
  resultCode: number;
};

export const socialNetWorkApi = {
  settings: {
    withCredentials: true,
    headers: { "API-KEY": "34d100b8-894d-4061-9da0-9a27cb217fe9" },
  },

  getProfile(userId: number) {
    return axios.get<getUserProfileType>(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
      this.settings
    );
  },
  unFollowUser(userId: number) {
    return axios.delete<responseType>(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      this.settings
    );
  },

  followUser(userId: number) {
    return axios.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},
      this.settings
    );
  },
  getUsers(usersCount: number, page: number) {
    return axios.get<getUsersType>(
      `https://social-network.samuraijs.com/api/1.0/users?count=${usersCount}&page=${page}`,
      this.settings
    );
  },
  getAuth() {
    return axios.get<authMeRequestType>(
      "https://social-network.samuraijs.com/api/1.0/auth/me",
      this.settings
    );
  },
};
