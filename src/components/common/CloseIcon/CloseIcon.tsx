import styles from "./CloseIcon.module.css";
import cancel from "@/assets/icons/cancel.svg";

type CloseIconProps = {
  onClick: () => void;
  className?: string;
};

export const CloseIcon = ({ onClick, className }: CloseIconProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.cancel_container} ${className}`}
    >
      <img src={cancel} alt="cancel" className={styles.cancel} />
    </div>
  );
};
