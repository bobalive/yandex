import { Button } from "@/components/ui/Button";
import styles from "./Generate.module.css";
import { useMemo, useState } from "react";
import UploadButton from "@/components/common/UploadButton/UploadButton";
import { generateReport } from "@/shared/api/report";
export const Generate = () => {
  const [status, setStatus] = useState<
    "default" | "loading" | "success" | "error"
  >("default");
  const handleGenerate = async () => {
    setStatus("loading");
    try {
      await generateReport();
      setStatus("success");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };
  const text = useMemo(() => {
    if (status == "loading") return "идёт процесс генерации";
    if (status == "success") return "файл сгенерирован!";
    if (status == "error") return "упс, не то...";
    return "Начать генерацию";
  }, [status]);
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Сгенерируйте готовый csv-файл нажатием одной кнопки
      </p>
      {status === "default" ? (
        <Button onClick={handleGenerate}>{text}</Button>
      ) : (
        <UploadButton
          state={status}
          onCancel={() => setStatus("default")}
          text={text}
        >
          {status == "success" ? "Done!" : "Ошибка"}
        </UploadButton>
      )}
    </div>
  );
};
