import { Action, BillCategory } from "redux/types";
import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_SUCCESS
} from "./categoryTypes";

export const fetchCategoriesLoading = (): Action => ({
  type: FETCH_CATEGORIES_LOADING
});

export const fetchCategoriesSuccess = (
  categories: BillCategory[]
): Action<BillCategory[]> => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories
});

export const fetchCategoriesFailure = (error: string): Action<string> => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error
});
