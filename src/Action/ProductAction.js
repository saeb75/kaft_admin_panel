import ApiFunction from "../helper/axios";
import { ADD_PRODUCT_REQUEST } from "./ActionType";

export const addProducts = (form) => (dispatch) => {
  console.log("sadsadsadsa");
  dispatch({ type: ADD_PRODUCT_REQUEST });
  ApiFunction()
    .post("product/add", form)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
