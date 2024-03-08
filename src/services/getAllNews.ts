import { api } from ".";

interface News {
  id: string;
  title: string;
  description: string;
}

export const getAllNews = async (params: Params): Promise<News[]> => {
  const { data } = await api.get<News[]>('/news');
  return data;
};