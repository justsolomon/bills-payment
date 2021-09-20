import { Action, DefaultReducer } from "redux/types";
import {
  MAKE_PAYMENT_FAILURE,
  MAKE_PAYMENT_LOADING,
  MAKE_PAYMENT_SUCCESS
} from "./paymentTypes";

const initialState: DefaultReducer<null> = {
  loading: false,
  success: false,
  data: null,
  error: ""
};

const paymentReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case MAKE_PAYMENT_LOADING:
      return {
        ...state,
        error: "",
        loading: true
      };
    case MAKE_PAYMENT_SUCCESS:
      return {
        ...initialState,
        success: true
      };
    case MAKE_PAYMENT_FAILURE:
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

export default paymentReducer;
