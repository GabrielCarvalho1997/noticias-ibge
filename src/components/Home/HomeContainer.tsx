import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants";
import { getAllNews } from "@/services/getAllNews";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "../ui/button";
import CardContainer from "./CardContainer";
import PaginationContainer from "./PaginationContainer";

const HomeContainer = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [perPage, setPerPage] = useState(DEFAULT_PAGE_SIZE);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["news", page, perPage],
    queryFn: () => getAllNews({ page: page, perPage: perPage }),
  });
  return (
    <>
      <main className="grid grid-cols-3 flex-wrap-reverse gap-10 md:gap-12 p-5">
        {isLoading && <p className="text-lg text-center">Carregando...</p>}
        {isError && (
          <p className="text-lg text-center text-red-500">
            Ocorreu um erro ao carregar as notícias
          </p>
        )}
        {data?.items.map((news) => {
          return <CardContainer key={news.id} news={news} />;
        })}
        <Button
          className="w-32 hover:scale-105 hover:bg-primary"
          onClick={() => {
            setPerPage(perPage + 12);
          }}
        >
          Ver mais
        </Button>
      </main>

      <PaginationContainer data={data} page={page} setPage={setPage} />
    </>
  );
};

export default HomeContainer;
