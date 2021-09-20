import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import goToPage from "redux/page/pageService";
import makePayment from "redux/payment/paymentService";
import { PageName, RootState } from "redux/types";
import AlertModal from "../AlertModal";
import Button from "../Button";
import Header from "../Header";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { page, sessionInfo, payment } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch();
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const { currentPage, nextPage } = page;
  const nextButtonDisabled = (page: PageName): boolean => {
    const { category, biller, billerCustomerId, product } = sessionInfo;

    switch (page) {
      case "bill-categories":
        return Boolean(category);
      case "category-billers":
        return Boolean(biller);
      case "customer-input":
        return Boolean(billerCustomerId);
      case "products":
        return Boolean(product);
      default:
        return Boolean(category);
    }
  };

  const { loading, success, error } = payment;

  useEffect(() => {
    if (error) setErrorModalOpen(true);
    else setErrorModalOpen(false);
  }, [error]);

  return (
    <>
      <Header />
      <main className={styles["main-content"]}>
        <div className={styles["main-content__children"]}>{children}</div>
        <Button
          className={styles["main-content__continue-button"]}
          isDisabled={!nextButtonDisabled(currentPage)}
          isLoading={loading}
          onClick={() => {
            if (currentPage === "products") dispatch(makePayment());
            else dispatch(goToPage(nextPage as PageName));
          }}
        >
          {currentPage === "products" ? "Make Payment" : "Continue"}
        </Button>
      </main>

      <AlertModal
        status="success"
        isOpen={success}
        title="Payment made successfully"
        onClickOutside={() => window.location.reload()}
      />
      <AlertModal
        status="error"
        isOpen={errorModalOpen}
        title="An error occurred"
        message={error}
        onClickOutside={() => setErrorModalOpen(false)}
      />
    </>
  );
};

export default Layout;
