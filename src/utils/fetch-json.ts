export const fetchJson = async <T>(url: string): Promise<T> => {
  const data = await fetch(url);
  const jsonData = await data.json();
  return jsonData.data;
};
