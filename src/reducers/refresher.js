import { UPDATE_REFRESH_STATUS } from "../actions/actionType";

export default function (state = "", action) {
  switch (action.type) {
    case UPDATE_REFRESH_STATUS: {
     return  action.payload;
    }
    default:
      return state;
  }
}
