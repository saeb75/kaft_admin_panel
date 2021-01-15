import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
});
