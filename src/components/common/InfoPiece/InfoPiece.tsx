import styles from "./infoPiece.module.css";

type InfoPieceProps = {
  title: string;
  value: string;
  variant?: "default" | "purple";
};

export const InfoPiece = ({
  title,
  value,
  variant = "default",
}: InfoPieceProps) => {
  return (
    <div className={`${styles.container} ${styles[variant]}`}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};
