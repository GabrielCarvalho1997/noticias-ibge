import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants";
import { PaginatedResponse } from "@/interface/NewsInterface";
import { api } from ".";

export const getAllNews = async (): Promise<PaginatedResponse> => {
  try {
    const { data } = await api.get<PaginatedResponse>("", {
      params: {
        page: DEFAULT_PAGE,
        qtd: DEFAULT_PAGE_SIZE,
      },
    });
    return data;
  } catch (error) {
    console.error(`Failed to get all news: ${error}`);
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
