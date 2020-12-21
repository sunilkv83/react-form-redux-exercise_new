import { ADD_SCREENING } from "./actionType";

let nextTodoId = 0;

export const addScreening = content => ({
  type: ADD_SCREENING,
  payload: {
    id: ++nextTodoId,
    content
  }
});