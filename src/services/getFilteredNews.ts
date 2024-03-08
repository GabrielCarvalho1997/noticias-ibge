import { api } from ".";

interface News {
  id: string;
  title: string;
  description: string;
}

interface Params {
  qtd?: number;
  page?: number;
  itensPerPage: number;
}

export const getAllNews = async (params: Params): Promise<News[]> => {
  const { qtd, page, itensPerPage } = params;
  const queryString = `?qtd=${qtd}&page=${page}&itensPorPagina=${itensPerPage}`;
  const { data } = await api.get<News[]>(`/news${queryString}`);
  return data;
};