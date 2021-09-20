import { Action } from "redux/types";
import {
  BILL_CATEGORIES_PAGE,
  CATEGORY_BILLERS_PAGE,
  CUSTOMER_INPUT_PAGE,
  PRODUCTS_PAGE
} from "./pageTypes";

export const goToBillCategories = (): Action => ({
  type: BILL_CATEGORIES_PAGE
});

export const goToCategoryBillers = (): Action => ({
  type: CATEGORY_BILLERS_PAGE
});

export const goToCustomerInput = (): Action => ({
  type: CUSTOMER_INPUT_PAGE
});

export const goToProductsPage = (): Action => ({
  type: PRODUCTS_PAGE
});
