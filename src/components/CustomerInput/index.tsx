import { useDispatch, useSelector } from "react-redux";
import { updateCustomerId } from "redux/session/sessionActions";
import { Biller, RootState } from "redux/types";
import styles from "./customerInput.module.scss";

const CustomerInput = () => {
  const { biller, billerCustomerId } = useSelector(
    (state: RootState) => state.sessionInfo
  );
  const dispatch = useDispatch();

  const { customerField1, customerField2, customerField3 } = biller as Biller;
  return (
    <form
      className={styles["customer-input"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="customerId" className={styles["customer-input__label"]}>
        {customerField1 || customerField2 || customerField3}
      </label>
      <input
        id="customerId"
        type="text"
        required
        className={styles["customer-input__input"]}
        value={billerCustomerId}
        onChange={(e) => {
          dispatch(updateCustomerId(e.target.value));
        }}
      />
    </form>
  );
};

export default CustomerInput;
