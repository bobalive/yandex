import styles from "./Main.module.css";
import { AggregateForm } from "./components/AggregateForm";
import { historyStore } from "@/shared/store/history";
import { useState } from "react";
import type { AggregatedData } from "@/shared/types/aggregateType";
import { AggregateTable } from "./components/AggregateTable";

export const Main = () => {
  const { addHistory } = historyStore();
  const [aggregatedData, setAggregatedData] = useState<AggregatedData | null>(
    null
  );
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Загрузите <span className={styles.boldText}>csv</span> файл и получите
        <span className={styles.boldText}> полную информацию</span> о нём
        за сверхнизкое время
      </p>
      <AggregateForm
        acceptedFileTypes="text/csv"
        onSubmit={(status, fileName, data) => {
          if (status === "success") {
            if (data) {
              setAggregatedData(data);
            }
          }
          addHistory(status, fileName, data);
        }}
        onClear={() => {
          setAggregatedData(null);
        }}
      />
      {aggregatedData && <AggregateTable data={aggregatedData} />}
    </div>
  );
};
