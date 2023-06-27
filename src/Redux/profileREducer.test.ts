import react from "react";
import {
  addPostActionCreator,
  initialStateProfileType,
  profileReducer,
  updatePostTitleActionCreator,
} from "./profileReducer";

const initialState: initialStateProfileType = {
  myPostsData: [
    { id: 1, message: "Hi Whats New?", likesCount: 3 },
    { id: 2, message: "Hello", likesCount: 6 },
    { id: 3, message: "How Are you", likesCount: 754 },
    { id: 4, message: "Fine", likesCount: 11 },
    { id: 5, message: "Lets found smth", likesCount: 0 },
    { id: 6, message: "Check Our Posts", likesCount: 66 },
  ],
  newPostProfileTitle: "fffff",
  profile: {
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
    userId: 2,
    lookingForAJob: true,
    lookingForAJobDescription: "helloooooooo",
    fullName: "Evgeny",
    photos: {
      large: "",
      small: "",
    },
  },
};

test("Post should be added", () => {
  const newState = profileReducer(initialState, addPostActionCreator());

  expect(newState.myPostsData.length).toBe(7);
  expect(initialState.myPostsData.length).toBe(6);
  expect(newState.myPostsData[0].message).toBe("fffff");
});

test("Post title should be update", () => {
  const initialState: initialStateProfileType = {
    myPostsData: [
      { id: 1, message: "Hi Whats New?", likesCount: 3 },
      { id: 2, message: "Hello", likesCount: 6 },
      { id: 3, message: "How Are you", likesCount: 754 },
      { id: 4, message: "Fine", likesCount: 11 },
      { id: 5, message: "Lets found smth", likesCount: 0 },
      { id: 6, message: "Check Our Posts", likesCount: 66 },
    ],
    newPostProfileTitle: "",
    profile: {
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
      userId: 2,
      lookingForAJob: true,
      lookingForAJobDescription: "helloooooooo",
      fullName: "Evgeny",
      photos: {
        large: "",
        small: "",
      },
    },
  };

  const newState = profileReducer(
    initialState,
    updatePostTitleActionCreator("newTitle")
  );

  expect(newState.newPostProfileTitle).toBe("newTitle");
  expect(initialState.newPostProfileTitle.length).toBe(0);
});
