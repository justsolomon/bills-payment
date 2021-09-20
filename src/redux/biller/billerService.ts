import { Dispatch } from "redux";
import axios from "utils/axiosInstance";
import getErrorMessage from "utils/getErrorMessage";
import {
  fetchBillersFailure,
  fetchBillersLoading,
  fetchBillersSuccess
} from "./billerActions";

const fetchBillers = (categoryId: string): ((dispatch: Dispatch) => void) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchBillersLoading());

    axios
      .post("/getBillerCategoryList", { categoryId })
      .then((res) => {
        const { responseCode, result } = res.data;

        if (responseCode === "00") {
          dispatch(fetchBillersSuccess(result));
        } else {
          dispatch(fetchBillersFailure(getErrorMessage(res.data)));
        }
      })
      .catch((err) => {
        dispatch(fetchBillersFailure(getErrorMessage(err)));
      });
  };
};

export default fetchBillers;
