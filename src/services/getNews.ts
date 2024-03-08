import { api } from ".";

interface Params {
    id: number;
}

export const getAllNews = async (id: Params): Promise<News> => {
    const { id } = params;
    const queryString = `?}`;
    const { data } = await api.get<News[]>(`/news${queryString}`);
    return data;
};
