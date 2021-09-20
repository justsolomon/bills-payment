import {
  Action,
  BillCategory,
  Biller,
  Product,
  SessionInfo
} from "redux/types";
import {
  UPDATE_BILL_CATEGORY,
  UPDATE_CATEGORY_BILLER,
  UPDATE_CUSTOMER_ID,
  UPDATE_PRODUCT
} from "./sessionTypes";

const initialState: SessionInfo = {
  category: null,
  biller: null,
  billerCustomerId: "",
  product: null
};

const sessionReducer = (
  state = initialState,
  action: Action<BillCategory | Biller | Product | string>
): SessionInfo => {
  switch (action.type) {
    case UPDATE_BILL_CATEGORY:
      return {
        ...state,
        category: action.payload as BillCategory
      };
    case UPDATE_CATEGORY_BILLER:
      return {
        ...state,
        biller: action.payload as Biller
      };
    case UPDATE_CUSTOMER_ID:
      return {
        ...state,
        billerCustomerId: action.payload as string
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        product: action.payload as Product
      };
    default:
      return state;
  }
};

export default sessionReducer;
