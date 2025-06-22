import { InfoPiece } from "@/components/common/InfoPiece";
import type { AggregatedData } from "@/shared/types/aggregateType";

import styles from "./AggregateTable.module.css";
import { aggregateKeyToText } from "@/shared/utils";

type AggregateTableProps = {
  data: AggregatedData;
};

export const AggregateTable = ({ data }: AggregateTableProps) => {
  const keys = Object.keys(data) as (keyof AggregatedData)[];
  return (
    <div className={styles.container}>
      {keys
        .filter((key) => key !== "average_spend_galactic")
        .map((key) => (
          <InfoPiece
            key={key}
            value={aggregateKeyToText(key)}
            title={String(data[key])}
          />
        ))}
    </div>
  );
};
