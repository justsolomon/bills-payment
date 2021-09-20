import Layout from "components/global/Layout";
import { useSelector } from "react-redux";
import { RootState } from "redux/types";
import BillCategories from "./BillCategories";
import CategoryBillers from "./CategoryBillers";
import Products from "./Products";

const AllPages = () => {
  const { currentPage } = useSelector((state: RootState) => state.page);

  const getPage = (): React.ReactNode => {
    switch (currentPage) {
      case "bill-categories":
        return <BillCategories />;
      case "category-billers":
        return <CategoryBillers />;
      case "products":
        return <Products />;
      default:
        return <BillCategories />;
    }
  };

  return <Layout>{getPage()}</Layout>;
};

export default AllPages;
