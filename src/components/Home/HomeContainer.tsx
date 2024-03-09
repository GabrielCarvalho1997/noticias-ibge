import { getAllNews } from "@/services/getAllNews";
import { useQuery } from "@tanstack/react-query";
import CardContainer from "./CardContainer";

const HomeContainer = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
  });
  return (
    <main className="grid grid-cols-3 flex-wrap-reverse gap-10 md:gap-16 p-5">
      {isLoading && <p className="text-lg text-center">Carregando...</p>}
      {isError && (
        <p className="text-lg text-center text-red-500">
          Ocorreu um erro ao carregar as notícias
        </p>
      )}
      {data?.items?.map((news) => {
        return <CardContainer key={news.id} news={news} />;
      })}
    </main>
  );
};

export default HomeContainer;
