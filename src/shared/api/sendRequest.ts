export const sendRequest = async (url: string, method: string, body?: any) => {
  console.log(import.meta.env.VITE_API_URL + url);
  const response = await fetch(import.meta.env.VITE_API_URL + url, {
    method,
    body,
  });
  return response;
};
