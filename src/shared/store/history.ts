import { create } from "zustand";
import type { AggregatedData } from "../types/aggregateType";
import type { HistoryType } from "../types/historyType";

export const historyStore = create<{
  history: HistoryType[];
  addHistory: (
    status: "success" | "error",
    fileName: string,
    data?: AggregatedData
  ) => void;
}>((set) => ({
  history: [],
  addHistory: (status, fileName, data) =>
    set((state) => ({
      history: [
        ...state.history,
        { status, fileName, createdAt: new Date(), data },
      ],
    })),
}));
