import react from "react";
import {
  addMessageCreator,
  dialogsReducer,
  initialStateDialogsType,
  updateMessageTitleCreator,
} from "./dialogsReducer";

test("message should be added", () => {
  const initialState: initialStateDialogsType = {
    dialogsData: [
      { id: 1, name: "Timur" },
      { id: 2, name: "Vladimir" },
      { id: 3, name: "Maxim" },
      { id: 4, name: "Igor" },
      { id: 5, name: "Stepan" },
      { id: 6, name: "HowAreYou" },
    ],
    messageData: [
      { id: 1, message: "Hmmm" },
      { id: 2, message: "Butter" },
      { id: 3, message: "Milk" },
      { id: 4, message: "Bread" },
      { id: 5, message: "Tost" },
      { id: 6, message: "CheckNewValue" },
    ],
    newMessageToMessagesTitle: "new message here",
  };

  const newState = dialogsReducer(initialState, addMessageCreator());

  expect(newState.newMessageToMessagesTitle.length).toBe(0);
  expect(newState.messageData.length).toBe(7);
  expect(newState.messageData[6].message).toBe("new message here");
});

test("message title should be update", () => {
  const initialState: initialStateDialogsType = {
    dialogsData: [
      { id: 1, name: "Timur" },
      { id: 2, name: "Vladimir" },
      { id: 3, name: "Maxim" },
      { id: 4, name: "Igor" },
      { id: 5, name: "Stepan" },
      { id: 6, name: "HowAreYou" },
    ],
    messageData: [
      { id: 1, message: "Hmmm" },
      { id: 2, message: "Butter" },
      { id: 3, message: "Milk" },
      { id: 4, message: "Bread" },
      { id: 5, message: "Tost" },
      { id: 6, message: "CheckNewValue" },
    ],
    newMessageToMessagesTitle: "",
  };

  const newState = dialogsReducer(
    initialState,
    updateMessageTitleCreator("newTitle")
  );

  expect(initialState.newMessageToMessagesTitle.length).toBe(0);
  expect(newState.newMessageToMessagesTitle.length).not.toBe(0);

  expect(newState.newMessageToMessagesTitle).toBe("newTitle");
});
