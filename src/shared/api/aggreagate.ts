import API from "../contants/api";
import { sendRequest } from "./sendRequest";

export const aggregateFile = async (file: File) => {
  const formData = new FormData();
  const searchParams = new URLSearchParams();
  searchParams.append("rows", "10000");
  formData.append("file", file);
  const res = await sendRequest(
    API.aggregate + "?" + searchParams.toString(),
    "POST",
    formData
  );

  const reader = res.body?.getReader();
  let data;
  let jsonString = "";
  while (!(data = await reader?.read())?.done) {
    jsonString = new TextDecoder().decode(data?.value);
  }
  return JSON.parse(jsonString);
};
