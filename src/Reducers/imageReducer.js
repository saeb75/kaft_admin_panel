import {
  ADD_CATEGORY_FAILED,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_COLOR_FAILED,
  ADD_COLOR_REQUEST,
  ADD_COLOR_SUCCESS,
  ADD_IMAGE_FAILED,
  ADD_IMAGE_REQUEST,
  ADD_IMAGE_SUCCESS,
  GET_COLOR_FAILED,
  GET_COLOR_REQUEST,
  GET_COLOR_SUCCESS,
  GET_IMAGE_FAILED,
  GET_IMAGE_REQUEST,
  GET_IMAGE_SUCCESS,
} from "../Action/ActionType";

let initialState = {
  images: [],
  loading: false,
  image: "",
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_IMAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        image: action.payload,
      };
    case ADD_IMAGE_FAILED:
      return {
        ...state,
        loading: false,
      };
    case GET_IMAGE_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case GET_IMAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        images: action.payload,
      };
    case GET_IMAGE_FAILED:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default imageReducer;
