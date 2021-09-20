import { useDispatch, useSelector } from "react-redux";
import { PageName, RootState } from "redux/types";
import Button from "../Button";
import { ReactComponent as BackArrow } from "assets/vectors/back-arrow.svg";
import goToPage from "redux/page/pageService";
import styles from "./header.module.scss";

const Header = () => {
  const { header, prevPage } = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();

  return (
    <header className={styles["header"]}>
      <Button
        variant="transparent"
        className={styles["header__back-button"]}
        style={{ visibility: prevPage ? "visible" : "hidden" }}
        leftIcon={<BackArrow />}
        onClick={() => dispatch(goToPage(prevPage as PageName))}
      >
        Back
      </Button>
      <h1 className={styles["header__title"]}>{header}</h1>
    </header>
  );
};

export default Header;
