import API from "../contants/api";
import { sendRequest } from "./sendRequest";

export const generateReport = async () => {
  try {
    const res = await sendRequest(
      API.report + "?size=0.1&withErrors=off&maxSpend=1000",
      "GET"
    );
    if (res.status != 200) throw new Error("Failed to generate report");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report.csv";
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    throw error;
  }
};
