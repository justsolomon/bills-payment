import { useDispatch, useSelector } from "react-redux";
import { PageName, RootState } from "redux/types";
import Button from "../Button";
import { ReactComponent as BackArrow } from "assets/vectors/back-arrow.svg";
import {
  goToBillCategories,
  goToCategoryBillers,
  goToProductsPage
} from "redux/page/pageActions";

const Header = () => {
  const { header, prevPage } = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();

  const goToPage = (page: PageName): void => {
    switch (page) {
      case "bill-categories":
        dispatch(goToBillCategories());
        break;
      case "category-billers":
        dispatch(goToCategoryBillers());
        break;
      case "products":
        dispatch(goToProductsPage());
        break;
      default:
        dispatch(goToBillCategories());
    }
  };

  return (
    <header>
      {prevPage ? (
        <Button
          variant="transparent"
          style={{ color: "black" }}
          leftIcon={<BackArrow />}
          onClick={() => goToPage(prevPage)}
        >
          Back
        </Button>
      ) : null}
      <h1>{header}</h1>
    </header>
  );
};

export default Header;
