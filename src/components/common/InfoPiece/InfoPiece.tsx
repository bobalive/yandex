import styles from "./infoPiece.module.css";

type InfoPieceProps = {
  title: string;
  value: string;
};

export const InfoPiece = ({ title, value }: InfoPieceProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};
