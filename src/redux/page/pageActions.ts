import { Action, Page } from "redux/types";
import {
  BILL_CATEGORIES_PAGE,
  CATEGORY_BILLERS_PAGE,
  PRODUCTS_PAGE
} from "./pageTypes";

export const goToBillCategories = (): Action<Page> => ({
  type: BILL_CATEGORIES_PAGE
});

export const goToCategoryBillers = (): Action<Page> => ({
  type: CATEGORY_BILLERS_PAGE
});

export const goToProductsPage = (): Action<Page> => ({
  type: PRODUCTS_PAGE
});
