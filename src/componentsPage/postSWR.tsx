import basePostUrl from "./AxiosConfig";

export const postFetcher = (url: string, data: any) =>
  basePostUrl.post(url, data).then((res) => res);
