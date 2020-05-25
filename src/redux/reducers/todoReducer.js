import { ADD_TODO, UPDATE_TODO } from "../constant-type/todoConstant";
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
    default:
      return state;
  }
};

export default todoReducer;
