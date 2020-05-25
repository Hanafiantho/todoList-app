import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "../constant-type/todoConstant";
import { todoState } from "../state/todoState";

const todoReducer = (state = todoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    case DELETE_TODO:
      return state.filter((state) => state.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoReducer;
