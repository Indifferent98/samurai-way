import react from "react";
import {
  ChangeFollowActionCreator,
  UsersReducer,
  initialStateUsersType,
  setUsersActionCreator,
} from "./UsersReducer";

test("FOLLOW status should be changed", () => {
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
  };

  const newState = UsersReducer(initialState, ChangeFollowActionCreator(141));

  expect(newState.users[1].followed).toBe(true);
  expect(initialState.users[1].followed).toBe(false);
});

test("Users should be set", () => {
  const initialState: initialStateUsersType = {
    users: [
      {
        name: "Dimych",
        photos: { small: null, large: null },
        uniqueUrlName: null,
        id: 1111,

        status: "i am so pretty",
        followed: true,
      },
      {
        name: "Evgen",
        photos: { small: null, large: null },
        uniqueUrlName: null,
        id: 141,

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
  };

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
  };

  const newState = UsersReducer(
    initialState,
    setUsersActionCreator([...usersToSet.users])
  );

  expect(newState.users.length).toBe(1);
  expect(initialState.users.length).toBe(3);
  expect(newState.users[0].name).toBe("Dimychwwwwwwwwww");
});
