import type { AggregatedData } from "../types/aggregateType";

export const aggregateKeyToText = (key: keyof AggregatedData) => {
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
};
