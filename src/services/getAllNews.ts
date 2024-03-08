import { api } from ".";

interface News {
  id: string;
  title: string;
  description: string;
}

export const getAllNews = async () => {
  const { data } = await api.get<News[]>("/news");
  return data;
};
