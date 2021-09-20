import BillerCard from "components/BillerCard";
import { Biller } from "redux/types";
import styles from "./billerCardList.module.scss";

interface BillerCardListProps {
  billers: Biller[];
}

const BillerCardList = ({ billers }: BillerCardListProps) => {
  return (
    <ul className={styles["biller-card-list"]}>
      {billers.map((biller) => (
        <BillerCard biller={biller} key={biller.billerId} />
      ))}
    </ul>
  );
};

export default BillerCardList;
