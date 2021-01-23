import ApiFunction from "../helper/axios";
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
} from "./ActionType";

export const addProducts = (form) => (dispatch) => {
  console.log("sadsadsadsa");
  dispatch({ type: ADD_PRODUCT_REQUEST });
  ApiFunction()
    .post("product/add", form)
    .then((res) => dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ADD_PRODUCT_FAILED }));
};

export const getProducts = (pageNum) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  ApiFunction()
    .get(`product/get?page=${pageNum}`)
    .then((res) =>
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: { products: res.data.products, totalPage: res.data.totalPage },
      })
    )
    .catch((err) => dispatch({ type: GET_PRODUCT_FAILED }));
};
