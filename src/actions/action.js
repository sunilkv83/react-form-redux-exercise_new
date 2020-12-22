import { ADD_SCREENING,UPDATE_SCREENING,ADD_LOCATION,LOGIN } from "./actionType";

let nextTodoId = 0;

export const addScreening = content => ({
  type: ADD_SCREENING,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const updateScreening = (content,index) => ({
  type: UPDATE_SCREENING,
  payload: {
    id: index,
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

export const login = content => ({
  type: LOGIN,
  payload: {
    content
  }
});