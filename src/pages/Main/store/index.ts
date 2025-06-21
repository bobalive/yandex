import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AggregatedData } from "@/shared/types/aggregateType";

export const aggregateStore = create(
  persist<{
    aggregatedData: AggregatedData | null;
    setAggregatedData: (data: AggregatedData | null) => void;
  }>(
    (set) => ({
      aggregatedData: null,
      setAggregatedData: (data) => set({ aggregatedData: data }),
    }),
    {
      name: "aggregate-storage",
    }
  )
);
