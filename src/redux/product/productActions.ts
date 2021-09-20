import { Action, Product } from "redux/types";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS
} from "./productTypes";

export const fetchProductsLoading = (): Action => ({
  type: FETCH_PRODUCTS_LOADING
});

export const fetchProductsSuccess = (
  products: Product[]
): Action<Product[]> => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsFailure = (error: string): Action<string> => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error
});
