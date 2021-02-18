/* eslint-disable import/no-anonymous-default-export */
import { ADD_SCREENING, UPDATE_SCREENING,UPDATE_SCREENINGS } from "../actions/actionType";

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
    case UPDATE_SCREENINGS:{
        var screenings  = action.payload;
        const newState = {
            ...state,
            byIds : {}, 
            allIds : []
        };
        let i=0;

        screenings.forEach(content => {
          i++;
          newState.byIds[i] = { content}
          newState.allIds.push(i);
        });
        return newState;
     }
    default:
      return state;
  }
}
