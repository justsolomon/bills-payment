import { Action } from "redux/types";
import {
  MAKE_PAYMENT_FAILURE,
  MAKE_PAYMENT_LOADING,
  MAKE_PAYMENT_SUCCESS
} from "./paymentTypes";

export const makePaymentLoading = (): Action => ({
  type: MAKE_PAYMENT_LOADING
});

export const makePaymentSuccess = (): Action => ({
  type: MAKE_PAYMENT_SUCCESS
});

export const makePaymentFailure = (error: string): Action<string> => ({
  type: MAKE_PAYMENT_FAILURE,
  payload: error
});
