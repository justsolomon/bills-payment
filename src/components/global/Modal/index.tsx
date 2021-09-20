import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClickOutside: () => void;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  onClickOutside,
  children
}: ModalProps): null | JSX.Element => {
  const modalsContainer = document.getElementById("modals-container");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        (ref?.current && !ref?.current.contains(event.target as Node)) ||
        ref?.current?.isEqualNode(event.target as Node)
      ) {
        onClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);

  if (!modalsContainer || !isOpen) return null;

  return createPortal(
    <div ref={ref} className={styles["modal"]}>
      <div>{children}</div>
    </div>,
    modalsContainer
  );
};

export default Modal;
