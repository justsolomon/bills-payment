import { Dispatch } from "redux";
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
        const { responseCode, result } = res.data;

        if (responseCode === "00") {
          dispatch(fetchProductsSuccess(result));
        } else {
          dispatch(fetchProductsFailure(getErrorMessage(result)));
        }
      })
      .catch((err) => {
        dispatch(fetchProductsFailure(getErrorMessage(err)));
      });
  };
};

export default fetchProducts;
