import styles from "./Main.module.css";
import { FileUploader } from "@/components/ui/FileUploader";

export const Main = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Загрузите <span className={styles.boldText}>csv</span> файл и получите
        <span className={styles.boldText}> полную информацию</span> о нём
        за сверхнизкое время
      </p>
      <FileUploader
        onSubmit={async (file) => {
          await console.log(file);
        }}
        acceptedFileTypes="text/csv"
        key="main"
      />
    </div>
  );
};
