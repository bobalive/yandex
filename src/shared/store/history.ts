import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AggregatedData } from "../types/aggregateType";
import type { HistoryType } from "../types/historyType";

export const historyStore = create(
  persist<{
    history: HistoryType[];
    addHistory: (
      status: "success" | "error",
      fileName: string,
      data?: AggregatedData
    ) => void;
    deleteHistory: (index: number) => void;
    clearHistory: () => void;
  }>(
    (set) => ({
      history: [],
      addHistory: (status, fileName, data) => {
        console.log(status, fileName, data);
        set((state) => ({
          history: [
            ...state.history,
            { status, fileName, createdAt: new Date(), data },
          ],
        }));
      },
      deleteHistory: (index) => {
        set((state) => ({
          history: state.history.filter((_, i) => i !== index),
        }));
      },
      clearHistory: () => {
        set({ history: [] });
      },
    }),
    {
      name: "history-storage",
    }
  )
);
