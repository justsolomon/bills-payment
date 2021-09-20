import { Action, Page } from "redux/types";
import {
  BILL_CATEGORIES_PAGE,
  CATEGORY_BILLERS_PAGE,
  CUSTOMER_INPUT_PAGE,
  PRODUCTS_PAGE
} from "./pageTypes";

const initialState: Page = {
  currentPage: "bill-categories",
  prevPage: null,
  nextPage: "category-billers",
  header: "Select Bill Category"
};

const pageReducer = (state = initialState, action: Action<Page>): Page => {
  switch (action.type) {
    case BILL_CATEGORIES_PAGE:
      return initialState;
    case CATEGORY_BILLERS_PAGE:
      return {
        currentPage: "category-billers",
        prevPage: "bill-categories",
        nextPage: "customer-input",
        header: "Select Category Biller"
      };
    case CUSTOMER_INPUT_PAGE:
      return {
        currentPage: "customer-input",
        prevPage: "category-billers",
        nextPage: "products",
        header: "Fill Inputs"
      };
    case PRODUCTS_PAGE:
      return {
        currentPage: "products",
        prevPage: "customer-input",
        nextPage: null,
        header: "Select Product"
      };
    default:
      return state;
  }
};

export default pageReducer;
