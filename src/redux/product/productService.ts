import { Dispatch } from "redux";
import { makePaymentSuccess } from "redux/payment/paymentActions";
import axios from "utils/axiosInstance";
import getErrorMessage from "utils/getErrorMessage";
import {
  fetchProductsFailure,
  fetchProductsLoading,
  fetchProductsSuccess
} from "./productActions";

const fetchProducts = (
  billerId: string,
  categoryId: string
): ((dispatch: Dispatch) => void) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchProductsLoading());

    axios
      .post("/getBillerProductList", { categoryId, billerId })
      .then((res) => {
        const { responseCode, responseMessage, result } = res.data;

        if (responseCode === "00") {
          dispatch(fetchProductsSuccess(result));
        } else if (responseMessage === "Success") {
          // dispatch success message
          return dispatch(makePaymentSuccess());
        } else {
          dispatch(fetchProductsFailure(getErrorMessage(res.data)));
        }
      })
      .catch((err) => {
        dispatch(fetchProductsFailure(getErrorMessage(err)));
      });
  };
};

export default fetchProducts;
