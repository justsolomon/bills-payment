import Button from "components/global/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBillCategory } from "redux/session/sessionActions";
import { BillCategory, RootState } from "redux/types";
import styles from "./categoryCard.module.scss";

interface CategoryCardProps {
  category: BillCategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { category: selectedCategory } = useSelector(
    (state: RootState) => state.sessionInfo
  );
  const dispatch = useDispatch();

  const isSelected = selectedCategory
    ? selectedCategory.categoryId === category.categoryId
    : false;

  return (
    <li>
      <Button
        variant="ghost"
        className={`${styles["category-card"]} ${
          isSelected ? styles["category-card--active"] : ""
        }`}
        onClick={() => {
          dispatch(updateBillCategory(category));
        }}
      >
        <p className={styles["category-card__name"]}>{category.categoryName}</p>
      </Button>
    </li>
  );
};

export default CategoryCard;
