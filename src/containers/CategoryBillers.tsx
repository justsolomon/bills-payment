import BillerCardList from "components/BillerCardList";
import ErrorMessage from "components/global/ErrorMessage";
import Spinner from "components/global/Spinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBillers from "redux/biller/billerService";
import { RootState } from "redux/types";

const CategoryBillers = () => {
  const { billers, sessionInfo } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const { loading, error, data } = billers;
  const getBillers = () => {
    dispatch(fetchBillers(sessionInfo.category?.categoryId as string));
  };

  useEffect(getBillers, [dispatch, sessionInfo.category?.categoryId]);

  return error ? (
    <ErrorMessage error={error} retryRequest={getBillers} />
  ) : loading ? (
    <Spinner />
  ) : (
    <BillerCardList billers={data} />
  );
};

export default CategoryBillers;
