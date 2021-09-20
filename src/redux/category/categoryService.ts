import { Dispatch } from "redux";
import axios from "utils/axiosInstance";
import getErrorMessage from "utils/getErrorMessage";
import {
  fetchCategoriesFailure,
  fetchCategoriesLoading,
  fetchCategoriesSuccess
} from "./categoryActions";

const fetchCategories = (): ((dispatch: Dispatch) => void) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchCategoriesLoading());

    axios
      .post("/getCategoryList", {
        request: "categoryList"
      })
      .then((res) => {
        const { responseCode, result } = res.data;

        if (responseCode === "00") {
          dispatch(fetchCategoriesSuccess(result));
        } else {
          dispatch(fetchCategoriesFailure(getErrorMessage(res.data)));
        }
      })
      .catch((err) => {
        dispatch(fetchCategoriesFailure(getErrorMessage(err)));
      });
  };
};

export default fetchCategories;
