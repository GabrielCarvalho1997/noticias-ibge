import { api } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGetAllNews = () => {
  const result = useQuery(["allNews"], async () => await api.get("/news"));

  return {};
};
