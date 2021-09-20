import CategoryCard from "components/CategoryCard";
import { BillCategory } from "redux/types";
import styles from "./categoryCardList.module.scss";

interface CategoryCardListProps {
  categories: BillCategory[];
}

const CategoryCardList = ({ categories }: CategoryCardListProps) => {
  return (
    <ul className={styles["category-card-list"]}>
      {categories.map((category) => (
        <CategoryCard category={category} key={category.categoryId} />
      ))}
    </ul>
  );
};

export default CategoryCardList;
