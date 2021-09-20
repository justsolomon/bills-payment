import { Action, BillCategory, DefaultReducer } from "redux/types";
import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_SUCCESS
} from "./categoryTypes";

const initialState: DefaultReducer<BillCategory[]> = {
  loading: false,
  success: false,
  data: [],
  error: ""
};

const categoryReducer = (
  state = initialState,
  action: Action<BillCategory[] | string>
) => {
  switch (action.type) {
    case FETCH_CATEGORIES_LOADING:
      return {
        ...state,
        error: "",
        loading: true
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...initialState,
        success: true,
        data: action.payload
      };
    case FETCH_CATEGORIES_FAILURE:
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

export default categoryReducer;
