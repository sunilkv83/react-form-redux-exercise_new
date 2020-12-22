/* eslint-disable import/no-anonymous-default-export */
import { ADD_SCREENING, UPDATE_SCREENING } from "../actions/actionType";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_SCREENING: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          },
        },
      };
    }
    case UPDATE_SCREENING: {
      const { id, content } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          },
        },
      };
    }
    default:
      return state;
  }
}
