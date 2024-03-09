import { PaginatedResponse } from "@/interface/NewsInterface";
import { api } from ".";

// Adicionando novos parâmetros de consulta
export interface Params {
  de?: string;
  ate?: string;
  destaque?: number;
  introsize?: number;
  busca?: string;
}

export const getFilteredNews = async (
  params: Params
): Promise<PaginatedResponse> => {
  const { de, ate, destaque, introsize, busca } = params;

  try {
    const { data } = await api.get<PaginatedResponse>("", {
      params: {
        de: de,
        ate: ate,
        destaque: destaque,
        introsize: introsize,
        busca: busca,
      },
    });
    return data;
  } catch (error) {
    console.error(`Failed to get filtered news: ${error}`);
    return {
      count: 0,
      page: 0,
      totalPages: 0,
      nextPage: 0,
      previousPage: 0,
      showingFrom: 0,
      showingTo: 0,
      items: [],
    };
  }
};
