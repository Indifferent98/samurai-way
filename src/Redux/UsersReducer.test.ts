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

  const newState = UsersReducer(initialState, ChangeFollowActionCreator(141));

  expect(newState.users[1].followStatus).toBe(true);
  expect(initialState.users[1].followStatus).toBe(false);
});

test("Users should be set", () => {
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

  const usersToSet: initialStateUsersType = {
    users: [
      {
        name: "Dimychwwwwwwwwww",
        secondName: "wwwwwwwwwwwww",
        address: {
          country: "Belarus",
          city: "Minsk",
        },
        id: 1111,

        status: "i am so pretty",
        followStatus: true,
      },
    ],
  };

  const newState = UsersReducer(
    initialState,
    setUsersActionCreator(usersToSet)
  );

  expect(newState.users.length).toBe(1);
  expect(initialState.users.length).toBe(3);
  expect(newState.users[0].name).toBe("Dimychwwwwwwwwww");
});
