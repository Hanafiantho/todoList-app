import { ADD_TODO } from "../constant-type/todoConstant";
import { todoState } from "../state/todoState";

const todoReducer = (state = todoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
