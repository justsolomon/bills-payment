import { ReactComponent as ErrorIcon } from "assets/vectors/modal-error.svg";
import { ReactComponent as SuccessIcon } from "assets/vectors/modal-success.svg";
import { ReactComponent as CloseIcon } from "assets/vectors/close.svg";
import Button from "../Button";
import Modal from "../Modal";
import styles from "./alertModal.module.scss";

interface AlertModalProps {
  title: string;
  status: "success" | "error";
  isOpen: boolean;
  message?: string;
  onClickOutside: () => void;
  children?: React.ReactNode;

  /**
   * Callback run when the `Continue` button is clicked.
   * An example usecase would be redirecting a user
   */
  continueAction?: () => void;
}

const AlertModal = ({
  isOpen,
  title,
  message,
  status,
  continueAction,
  onClickOutside
}: AlertModalProps) => {
  const getIcon = (): JSX.Element => {
    switch (status) {
      case "success":
        return <SuccessIcon />;
      case "error":
        return <ErrorIcon />;
    }
  };

  return (
    <Modal isOpen={isOpen} onClickOutside={onClickOutside}>
      <div className={styles["alert-modal"]} data-testid="alert-modal">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            className={styles["alert-modal__close-button"]}
            iconButton
            variant="transparent"
            onClick={onClickOutside}
          >
            <CloseIcon />
          </Button>
        </div>
        <div className={styles["alert-modal__icon"]}>{getIcon()}</div>
        <div className={styles["alert-modal__info"]}>
          <p className={styles["alert-modal__title"]}>{title}</p>
          {message ? (
            <p className={styles["alert-modal__message"]}>{message}</p>
          ) : null}
        </div>
        <Button
          onClick={() => {
            onClickOutside();
            continueAction && continueAction();
          }}
          className={styles["alert-modal__continue-button"]}
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
