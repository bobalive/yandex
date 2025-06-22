import type { ReactNode } from "react";
import styles from "./dialog.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "../CloseIcon";

type DialogProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Dialog = ({ children, isOpen, onClose }: DialogProps) => {
  if (!isOpen) return null;
  return createPortal(
    <div className={styles.dialog}>
      <div className={styles.dialog__overlay} onClick={onClose}>
        <div className={styles.dialog__content}>
          <CloseIcon onClick={onClose} className={styles.close} />
          <div className={styles.dialog__content_inner}>{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};
