import axios from "axios";

import { getUserProfileType } from "../Redux/profileReducer";
import { responseType } from "../components/header/HeaderContainer";
import { getUsersContainerType } from "../Redux/UsersReducer";
import { requestDataType } from "../Redux/AuthReducer";

type getUsersType = { items: getUsersContainerType[] } & {
  totalCount: number;
  error: null | string;
};

type defaultRequestTyoe<D = {}> = {
  data: D;
  messages: string[];
  resultCode: number;
  fieldsErrors: string[];
};

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "34d100b8-894d-4061-9da0-9a27cb217fe9",
  },
});

export const socialNetWorkApi = {
  getProfile(userId: number) {
    return instance.get<getUserProfileType>(`profile/${userId}`);
  },
  unFollowUser(userId: number) {
    return instance.delete<responseType>(`follow/${userId}`);
  },

  followUser(userId: number) {
    return instance.post<defaultRequestTyoe>(`follow/${userId}`, {});
  },
  getUsers(usersCount: number, page: number) {
    return instance.get<getUsersType>(`users?count=${usersCount}&page=${page}`);
  },
  getAuth() {
    return instance.get<defaultRequestTyoe<requestDataType>>(`auth/me`);
  },
};
