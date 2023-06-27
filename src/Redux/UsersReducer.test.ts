import react from "react";
import {
  ChangeFollowAC,
  UsersReducer,
  changePreloaderStatusAC,
  initialStateUsersType,
  setUsersAC,
} from "./UsersReducer";

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
      photos: { small: null, large: null },
      uniqueUrlName: null,
      status: "i am so good",
      followed: false,
    },
    {
      name: "Vladimir",
      photos: { small: null, large: null },
      uniqueUrlName: null,
      id: 132,

      status: "js learn mood",
      followed: true,
    },
  ],
  pageSize: 15,
  totalCount: 0,
  currentPage: 1,
  preloaderIsActive: false,
};

test("FOLLOW status should be changed", () => {
  const newState = UsersReducer(initialState, ChangeFollowAC(141));

  expect(newState.users[1].followed).toBe(true);
  expect(initialState.users[1].followed).toBe(false);
});

test("Users should be set", () => {
  const usersToSet: initialStateUsersType = {
    users: [
      {
        name: "Dimychwwwwwwwwww",
        photos: { small: null, large: null },
        uniqueUrlName: null,
        id: 1111,

        status: "i am so pretty",
        followed: true,
      },
    ],
    pageSize: 15,
    totalCount: 0,
    currentPage: 1,
    preloaderIsActive: false,
  };

  const newState = UsersReducer(
    initialState,
    setUsersAC([...usersToSet.users])
  );

  expect(newState.users.length).toBe(1);
  expect(initialState.users.length).toBe(3);
  expect(newState.users[0].name).toBe("Dimychwwwwwwwwww");
});

test("Preloader status should be changed", () => {
  let newState = UsersReducer(initialState, changePreloaderStatusAC(true));

  expect(newState.preloaderIsActive).toBe(true);
  expect(initialState.preloaderIsActive).toBe(false);
  newState = UsersReducer(initialState, changePreloaderStatusAC(false));
  expect(newState.preloaderIsActive).toBe(false);
  expect(initialState.preloaderIsActive).toBe(false);
});
