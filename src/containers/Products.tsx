import { useEffect } from "react";
import ErrorMessage from "components/global/ErrorMessage";
import Spinner from "components/global/Spinner";
import ProductCardList from "components/ProductCardList";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "redux/product/productService";
import { RootState } from "redux/types";

const Products = () => {
  const { products, sessionInfo } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const { loading, error, data } = products;
  const { biller, category } = sessionInfo;
  const getProducts = () => {
    dispatch(
      fetchProducts(biller?.billerId as string, category?.categoryId as string)
    );
  };

  useEffect(getProducts, [dispatch, biller?.billerId, category?.categoryId]);

  return error ? (
    <ErrorMessage error={error} retryRequest={getProducts} />
  ) : loading ? (
    <Spinner />
  ) : (
    <ProductCardList products={data} />
  );
};

export default Products;
