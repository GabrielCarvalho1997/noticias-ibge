import { api } from ".";

interface News {
  id: string;
  title: string;
  description: string;
}

// Adicionando novos parâmetros de consulta
interface Params {
  de?: string;
  ate?: string;
  destaque?: boolean;
  introsize?: number;
  busca?: string;
}

export const getFilteredNews = async (params: Params): Promise<News[]> => {
  const { de, ate, destaque, introsize, busca } = params;

  try {
    const { data } = await api.get<News[]>("", {
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
    return [];
  }
};
