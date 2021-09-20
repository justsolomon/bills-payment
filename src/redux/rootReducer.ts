import { combineReducers } from "redux";
import billerReducer from "./biller/billerReducer";
import categoryReducer from "./category/categoryReducer";
import pageReducer from "./page/pageReducer";
import paymentReducer from "./payment/paymentReducer";
import productReducer from "./product/productReducer";
import sessionReducer from "./session/sessionReducer";

const rootReducer = combineReducers({
  page: pageReducer,
  sessionInfo: sessionReducer,
  billCategories: categoryReducer,
  billers: billerReducer,
  products: productReducer,
  payment: paymentReducer
});

export default rootReducer;
