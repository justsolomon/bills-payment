import { Action, BillCategory, Biller, Product } from "redux/types";
import {
  UPDATE_BILL_CATEGORY,
  UPDATE_CATEGORY_BILLER,
  UPDATE_CUSTOMER_ID,
  UPDATE_PRODUCT
} from "./sessionTypes";

export const updateBillCategory = (
  category: BillCategory
): Action<BillCategory> => ({
  type: UPDATE_BILL_CATEGORY,
  payload: category
});

export const updateCategoryBiller = (biller: Biller): Action<Biller> => ({
  type: UPDATE_CATEGORY_BILLER,
  payload: biller
});

export const updateCustomerId = (customerId: string): Action<string> => ({
  type: UPDATE_CUSTOMER_ID,
  payload: customerId
});

export const updateProduct = (product: Product): Action<Product> => ({
  type: UPDATE_PRODUCT,
  payload: product
});
