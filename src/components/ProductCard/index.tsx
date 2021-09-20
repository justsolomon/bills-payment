import Button from "components/global/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "redux/session/sessionActions";
import { Biller, Product, RootState } from "redux/types";
import styles from "./productCard.module.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { product: selectedProduct, biller } = useSelector(
    (state: RootState) => state.sessionInfo
  );
  const dispatch = useDispatch();

  const isSelected = selectedProduct
    ? selectedProduct.paymentItemId === product.paymentItemId
    : false;

  return (
    <li>
      <Button
        variant="ghost"
        className={`${styles["product-card"]} ${
          isSelected ? styles["product-card--active"] : ""
        }`}
        onClick={() => {
          dispatch(updateProduct(product));
        }}
      >
        <img
          src={(biller as Biller).serviceLogo}
          alt={(biller as Biller).billerName}
          className={styles["product-card__image"]}
        />
        <p className={styles["product-card__name"]}>
          {product.paymentItemName}
        </p>
      </Button>
    </li>
  );
};

export default ProductCard;
