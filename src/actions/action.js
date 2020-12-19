import { ADD_TODO } from "./actionType";

let nextTodoId = 0;

export const addScreening = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});