import Button from "components/global/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoryBiller } from "redux/session/sessionActions";
import { Biller, RootState } from "redux/types";
import styles from "./billerCard.module.scss";

interface BillerCardProps {
  biller: Biller;
}

const BillerCard = ({ biller }: BillerCardProps) => {
  const { biller: selectedBiller } = useSelector(
    (state: RootState) => state.sessionInfo
  );
  const dispatch = useDispatch();

  const isSelected = selectedBiller
    ? selectedBiller.billerId === biller.billerId
    : false;

  return (
    <li>
      <Button
        variant="ghost"
        className={`${styles["biller-card"]} ${
          isSelected ? styles["biller-card--active"] : ""
        }`}
        onClick={() => {
          dispatch(updateCategoryBiller(biller));
        }}
      >
        <img
          src={biller.serviceLogo}
          alt={biller.billerName}
          className={styles["biller-card__image"]}
        />
        <p className={styles["biller-card__name"]}>{biller.billerName}</p>
      </Button>
    </li>
  );
};

export default BillerCard;
