import ProductCard from "components/ProductCard";
import { Product } from "redux/types";
import styles from "./productCardList.module.scss";

interface ProductCardListProps {
  products: Product[];
}

const ProductCardList = ({ products }: ProductCardListProps) => {
  return (
    <ul className={styles["product-card-list"]}>
      {products.map((product) => (
        <ProductCard product={product} key={product.paymentItemId} />
      ))}
    </ul>
  );
};

export default ProductCardList;
