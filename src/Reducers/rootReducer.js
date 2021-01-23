import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import colorReducer from "./colorReducer";
import imageReducer from "./imageReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  color: colorReducer,
  image: imageReducer,
});
