import { combineReducers } from "redux";
import screening from "./screening";
import mylocation from "./mylocation";
import login from "./login";
export default combineReducers({ screening,mylocation,login });
