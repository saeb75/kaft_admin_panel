import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../Action/ActionType";

let initialState = {
  products: [],
  loading: false,
  product: "",
  totalPage: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: true,
        product: action.payload,
      };
    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
      };
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: true,
        products: action.payload.products,
        totalPage: action.payload.totalPage,
      };
    case GET_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
