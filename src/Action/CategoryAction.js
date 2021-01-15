import axios from "axios";
import instance from "../helper/axios";
import {
  GET_LIST_CATEGORY_REQUEST,
  GET_LIST_CATEGORY_SUCCESS,
  GET_LIST_CATEGORY_FAILED,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
} from "./ActionType";

export const getListCategory = () => (dispatch) => {
  dispatch({ type: GET_LIST_CATEGORY_REQUEST });
  instance
    .get("category/listcategory")
    .then((res) => {
      dispatch({
        type: GET_LIST_CATEGORY_SUCCESS,
        payload: res.data.categories,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_LIST_CATEGORY_FAILED });
    });
};

export const addCategory = (form) => (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });
  instance
    .post("category/addcategory", form)
    .then((res) => {
      dispatch({
        type: ADD_CATEGORY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ADD_CATEGORY_FAILED });
    });
};
