import { ADD_TODO } from "../constant-type/todoConstant";

export const add_todo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
