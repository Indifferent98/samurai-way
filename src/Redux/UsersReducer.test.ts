import react from "react";
import {
  ChangeFollowAC,
  UsersReducer,
  changeFollowingInProgressStatusAC,
  changePreloaderStatusAC,
  getUsersContainerType,
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
      followingInProgress: false,
    },
    {
      name: "Evgen",

      id: 141,
      photos: { small: null, large: null },
      uniqueUrlName: null,
      status: "i am so good",
      followed: false,

      followingInProgress: false,
    },
    {
      name: "Vladimir",
      photos: { small: null, large: null },
      uniqueUrlName: null,
      id: 132,

      status: "js learn mood",
      followed: true,

      followingInProgress: false,
    },
  ],
  pageSize: 15,
  totalCount: 0,
  currentPage: 1,
  preloaderIsActive: false,
};

test("FOLLOW status should be changed", () => {
  const newState = UsersReducer(initialState, ChangeFollowAC(141, true));

  expect(newState.users[1].followed).toBe(true);
  expect(initialState.users[1].followed).toBe(false);
});

test("Users should be set", () => {
  const usersToSet: getUsersContainerType[] = [
    {
      name: "Dimychwwwwwwwwww",
      photos: { small: null, large: null },
      uniqueUrlName: null,
      id: 1111,

      status: "i am so pretty",
      followed: true,
    },
  ];

  const newState = UsersReducer(initialState, setUsersAC(usersToSet));

  expect(newState.users.length).toBe(1);
  expect(initialState.users.length).toBe(3);
  expect(newState.users[0].name).toBe("Dimychwwwwwwwwww");
  expect(newState.users[0].followingInProgress).toBeDefined();
});

test("Preloader status should be changed", () => {
  let newState = UsersReducer(initialState, changePreloaderStatusAC(true));

  expect(newState.preloaderIsActive).toBe(true);
  expect(initialState.preloaderIsActive).toBe(false);
  newState = UsersReducer(initialState, changePreloaderStatusAC(false));
  expect(newState.preloaderIsActive).toBe(false);
  expect(initialState.preloaderIsActive).toBe(false);
});

test("User FOLLOWING PROGRESS STATUS should be changed", () => {
  let newState = UsersReducer(
    initialState,
    changeFollowingInProgressStatusAC(true, 141)
  );

  expect(newState.users[1].followingInProgress).toBe(true);
  expect(newState.users[0].followingInProgress).toBe(false);
  expect(newState.users[2].followingInProgress).toBe(false);
});
