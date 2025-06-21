import { InfoPiece } from "@/components/common/InfoPiece";
import type { AggregatedData } from "@/shared/types/aggregateType";
import { useCallback } from "react";
import styles from "./AggregateTable.module.css";

type AggregateTableProps = {
  data: AggregatedData;
};

export const AggregateTable = ({ data }: AggregateTableProps) => {
  const keyToText = useCallback((key: keyof AggregatedData) => {
    switch (key) {
      case "total_spend_galactic":
        return "общие расходы в галактических кредитах";
      case "average_spend_galactic":
        return "средние расходы в галактических кредитах";
      case "rows_affected":
        return "количество обработанных записей";
      case "less_spent_at":
        return "день года с минимальными расходами";
      case "big_spent_civ":
        return "цивилизация с максимальными расходами";
      case "less_spent_civ":
        return "цивилизация с минимальными расходами";
      case "big_spent_at":
        return "день года с максимальными расходами";
      case "big_spent_value":
        return "максимальная сумма расходов за день";
      case "less_spent_value":
        return "сумма самого маленького расхода";
    }
  }, []);
  const keys = Object.keys(data) as (keyof AggregatedData)[];
  return (
    <div className={styles.container}>
      {keys
        .filter((key) => key !== "average_spend_galactic")
        .map((key) => (
          <InfoPiece
            key={key}
            value={keyToText(key)}
            title={String(data[key])}
          />
        ))}
    </div>
  );
};
