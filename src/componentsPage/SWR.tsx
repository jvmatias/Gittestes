import useSWR from "swr";
import basePostUrl from "./AxiosConfig";

export const fetcher = (url: string) =>
  basePostUrl.get(url).then((res) => res.data);
