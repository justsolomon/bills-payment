import CategoryCardList from "components/CategoryCardList";
import ErrorMessage from "components/global/ErrorMessage";
import Spinner from "components/global/Spinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchCategories from "redux/category/categoryService";
import { RootState } from "redux/types";

const BillCategories = () => {
  const {
    loading,
    error,
    data: categories
  } = useSelector((state: RootState) => state.billCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return error ? (
    <ErrorMessage
      error={error}
      retryRequest={() => dispatch(fetchCategories())}
    />
  ) : loading ? (
    <Spinner />
  ) : (
    <CategoryCardList categories={categories} />
  );
};

export default BillCategories;
