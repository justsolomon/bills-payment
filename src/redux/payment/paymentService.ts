import { Dispatch } from "redux";
import store from "redux/store";
import { ValidateBillerResponse } from "types/apiResponses";
import axios from "utils/axiosInstance";
import getErrorMessage from "utils/getErrorMessage";
import {
  makePaymentFailure,
  makePaymentLoading,
  makePaymentSuccess
} from "./paymentActions";

const makePayment = (): ((dispatch: Dispatch) => void) => {
  return (dispatch: Dispatch) => {
    const { product, billerCustomerId, biller } = store.getState().sessionInfo;
    dispatch(makePaymentLoading());

    //validate biller first
    axios
      .post("/billerValidation", {
        billerCustomerId,
        paymentItemCode: product?.paymentCode,
        billerName: biller?.billerId
      })
      .then((res) => {
        const { responseCode, data } = res.data as ValidateBillerResponse;

        if (responseCode === "00") {
          dispatchPayment(dispatch, data.user.name);
        } else {
          dispatch(makePaymentFailure(getErrorMessage(res.data)));
        }
      })
      .catch((err) => {
        dispatch(makePaymentFailure(getErrorMessage(err)));
      });
  };
};

const dispatchPayment = (dispatch: Dispatch, billerCustomerName: string) => {
  const { product, billerCustomerId, biller, category } =
    store.getState().sessionInfo;

  const data = {
    reference: "80981348A83440904042300319",
    billerCustomerId,
    categoryId: category?.categoryId,
    amount: product?.amount,
    itemFee: product?.itemFee || "0",
    mobileNumber: "09049957786",
    billerCustomerName,
    source: "openapi",
    debitAccountName: billerCustomerName,
    debitAccountNumber: "4460518964",
    billerName: biller?.billerName,
    paymentItemCode: product?.paymentCode,
    username: "09049957786",
    password: "654321",
    saveBeneficiary: "NO",
    countryCode: "234"
  };

  axios
    .post("/billerPayment", data)
    .then((res) => {
      const { responseCode } = res.data;

      if (responseCode === "00") {
        dispatch(makePaymentSuccess());
      } else {
        dispatch(makePaymentFailure(getErrorMessage(res.data)));
      }
    })
    .catch((err) => {
      dispatch(makePaymentFailure(getErrorMessage(err)));
    });
};

export default makePayment;
