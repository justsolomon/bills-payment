import { Dispatch } from "redux";
import { PageName } from "redux/types";
import {
  goToBillCategories,
  goToCategoryBillers,
  goToCustomerInput,
  goToProductsPage
} from "./pageActions";

const goToPage = (page: PageName): ((dispatch: Dispatch) => void) => {
  return (dispatch: Dispatch) => {
    switch (page) {
      case "bill-categories":
        dispatch(goToBillCategories());
        break;
      case "category-billers":
        dispatch(goToCategoryBillers());
        break;
      case "customer-input":
        dispatch(goToCustomerInput());
        break;
      case "products":
        dispatch(goToProductsPage());
        break;
      default:
        dispatch(goToBillCategories());
    }
  };
};

export default goToPage;
