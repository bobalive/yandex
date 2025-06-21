import type { AggregatedData } from "./aggregateType";

export type HistoryType = {
  status: "success" | "error";
  fileName: string ;
  createdAt: Date;
  data?: AggregatedData;
};
