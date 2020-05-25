import uuid from "uuid/dist/v4";

export const todoState = [
  { id: uuid(), name: "Wake Up", completed: true },
  { id: uuid(), name: "Pray", completed: false },
  { id: uuid(), name: "Take A Bath", completed: false },
  { id: uuid(), name: "Breakfast", completed: false },
  { id: uuid(), name: "Go to Office", completed: false },
];
