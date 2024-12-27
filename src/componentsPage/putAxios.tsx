import basePostUrl from "./AxiosConfig";

export const putFetcher = (url: string, data: any) =>
  basePostUrl.put(url, data).then((res) => res);
