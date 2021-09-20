import { Action, Biller, DefaultReducer } from "redux/types";
import {
  FETCH_BILLERS_FAILURE,
  FETCH_BILLERS_LOADING,
  FETCH_BILLERS_SUCCESS
} from "./billerTypes";

const initialState: DefaultReducer<Biller[]> = {
  loading: false,
  success: false,
  data: [],
  error: ""
};

const billerReducer = (
  state = initialState,
  action: Action<Biller[] | string>
) => {
  switch (action.type) {
    case FETCH_BILLERS_LOADING:
      return {
        ...state,
        error: "",
        loading: true
      };
    case FETCH_BILLERS_SUCCESS:
      return {
        ...initialState,
        success: true,
        data: action.payload
      };
    case FETCH_BILLERS_FAILURE:
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

export default billerReducer;
