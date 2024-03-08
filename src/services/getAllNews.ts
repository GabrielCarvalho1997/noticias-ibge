import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants";
import { api } from ".";

interface News {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
}

interface PaginatedResponse {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: News[];
}

export const getAllNews = async (): Promise<News[]> => {
  try {
    const { data } = await api.get<PaginatedResponse>("", {
      params: {
        page: DEFAULT_PAGE,
        qtd: DEFAULT_PAGE_SIZE,
      },
    });
    const news = data.items;
    return news;
  } catch (error) {
    console.error(`Failed to get all news: ${error}`);
    return [];
  }
};
