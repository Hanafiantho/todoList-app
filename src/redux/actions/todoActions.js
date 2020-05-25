import { ADD_TODO, UPDATE_TODO } from "../constant-type/todoConstant";

export const add_todo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const update_todo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};
