import { Action, Product, DefaultReducer } from "redux/types";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS
} from "./productTypes";

const initialState: DefaultReducer<Product[]> = {
  loading: false,
  success: false,
  data: [],
  error: ""
};

const productReducer = (
  state = initialState,
  action: Action<Product[] | string>
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        error: "",
        loading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...initialState,
        success: true,
        data: action.payload
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
