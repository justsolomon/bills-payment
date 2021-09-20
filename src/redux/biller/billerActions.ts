import { Action, Biller } from "redux/types";
import {
  FETCH_BILLERS_FAILURE,
  FETCH_BILLERS_LOADING,
  FETCH_BILLERS_SUCCESS
} from "./billerTypes";

export const fetchBillersLoading = (): Action => ({
  type: FETCH_BILLERS_LOADING
});

export const fetchBillersSuccess = (billers: Biller[]): Action<Biller[]> => ({
  type: FETCH_BILLERS_SUCCESS,
  payload: billers
});

export const fetchBillersFailure = (error: string): Action<string> => ({
  type: FETCH_BILLERS_FAILURE,
  payload: error
});
