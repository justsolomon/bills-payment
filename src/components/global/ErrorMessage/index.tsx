import styles from "./errorMessage.module.scss";
import { ReactComponent as ErrorIcon } from "assets/vectors/error.svg";
import { ReactComponent as RetryIcon } from "assets/vectors/retry.svg";
import Button from "../Button";

interface IErrorMessage {
  /** Error message */
  error: string;

  /** Method used to re-run the request */
  retryRequest: () => void;
}

function ErrorMessage({ retryRequest, error }: IErrorMessage) {
  return (
    <div className={styles["error-message"]}>
      <ErrorIcon />
      <p className={styles["error-message__description"]}>
        {error === "Network Error"
          ? "Looks like you lost your connection. Please check it and try again"
          : error}
      </p>
      <Button
        className={styles["error-message__button"]}
        onClick={retryRequest}
        leftIcon={<RetryIcon />}
      >
        Try again
      </Button>
    </div>
  );
}

export default ErrorMessage;
