import { combineReducers } from "redux";
import fetchPostReducer from "./postReducer";
import fetchUserReducer from "./userReducer";
export default combineReducers({
  posts: fetchPostReducer,
  users:fetchUserReducer
});
