import { api } from ".";

interface News {
  id: string;
  title: string;
  description: string;
}

export const getNewsById = async (id: string): Promise<News | null> => {
  try {
    const { data } = await api.get<News>("", {
      params: {
        idproduto: id,
      },
    });
    return data;
  } catch (error) {
    console.error(`Failed to get news: ${error}`);
    return null;
  }
};
