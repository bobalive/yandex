import type { HistoryType } from "@/shared/types/historyType";
import styles from "./HistoryPiece.module.css";
import fileIcon from "@/assets/icons/file.svg";
import smile from "@/assets/icons/smile.svg";
import sad from "@/assets/icons/smile-sad.svg";
import deleteIcon from "@/assets/icons/trash.svg";
type HistoryPieceProps = {
  data: HistoryType;
  onClick: () => void;
  onDelete: () => void;
  selectable: boolean;
};
export const HistoryPiece = ({
  data,
  onClick,
  onDelete,
  selectable,
}: HistoryPieceProps) => {
  const { status, fileName, createdAt } = data;
  return (
    <div className={styles.historyPiece__container}>
      <div
        className={`${styles.historyPiece} ${
          selectable ? styles.selectable : ""
        }`}
        onClick={selectable ? onClick : undefined}
      >
        <div className={styles.historyPiece__info}>
          <img
            src={fileIcon}
            alt="file"
            className={styles.historyPiece__icon}
          />
          {fileName}
        </div>
        <div className={styles.historyPiece__info}>
          {new Date(createdAt).toLocaleDateString()}
        </div>
        <div
          className={`${styles.historyPiece__info} ${
            status === "error" ? styles.disabled : ""
          }`}
        >
          Обработан успешно
          <img src={smile} alt="status" className={styles.historyPiece__icon} />
        </div>
        <div
          className={`${styles.historyPiece__info} ${
            status === "success" ? styles.disabled : ""
          }`}
        >
          Не удалось обработать
          <img src={sad} alt="status" className={styles.historyPiece__icon} />
        </div>
      </div>
      <div className={styles.historyPiece__delete} onClick={onDelete}>
        <img
          src={deleteIcon}
          alt="delete"
          className={styles.historyPiece__icon}
        />
      </div>
    </div>
  );
};
