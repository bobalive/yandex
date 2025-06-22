import { historyStore } from "@/shared/store/history";
import { HistoryPiece } from "./components/HistoryPiece";
import { useState } from "react";
import type { AggregatedData } from "@/shared/types/aggregateType";
import styles from "./History.module.css";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { PAGES } from "@/shared/contants/pages";
import { Dialog } from "@/components/common/Dialog";
import { InfoPiece } from "@/components/common/InfoPiece";
import { aggregateKeyToText } from "@/shared/utils";

export const History = () => {
  const { history, deleteHistory, clearHistory } = historyStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState<AggregatedData | null>(
    null
  );

  return (
    <div className={styles.history__container}>
      {history.map((item, index) => (
        <HistoryPiece
          selectable={!!item.data}
          key={index}
          data={item}
          onClick={() => {
            if (item.data) {
              setIsModalOpen(true);
              setSelectedHistory(item.data);
            }
          }}
          onDelete={() => deleteHistory(index)}
        />
      ))}
      <div className={styles.history__buttons}>
        <Link to={PAGES.MAIN}>
          <Button>Сгенерировать больше</Button>
        </Link>
        <Button variant="black" onClick={clearHistory}>
          Очистить всё
        </Button>
      </div>
      <Dialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedHistory && (
          <div className={styles.history__dialog_content}>
            {(Object.keys(selectedHistory) as (keyof AggregatedData)[]).map(
              (key) => (
                <InfoPiece
                  variant="purple"
                  value={aggregateKeyToText(key)}
                  title={String(selectedHistory[key])}
                />
              )
            )}
          </div>
        )}
      </Dialog>
    </div>
  );
};
