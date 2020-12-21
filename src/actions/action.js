import { ADD_SCREENING,ADD_LOCATION } from "./actionType";

let nextTodoId = 0;

export const addScreening = content => ({
  type: ADD_SCREENING,
  payload: {
    id: ++nextTodoId,
    content
  }
});


export const addLocation = content => ({
  type: ADD_LOCATION,
  payload: {
    id: ++nextTodoId,
    content
  }
});