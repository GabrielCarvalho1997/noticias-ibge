import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants";
import { getAllNews } from "@/services/getAllNews";
import { Params, getFilteredNews } from "@/services/getFilteredNews";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "../ui/button";
import CardContainer from "./CardContainer";
import FilterContainer from "./FilterContainer";
import PaginationContainer from "./PaginationContainer";

const HomeContainer = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [perPage, setPerPage] = useState(DEFAULT_PAGE_SIZE);
  const [filters, setFilters] = useState<Params>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["news", page, perPage, filters],
    queryFn: filters
      ? () =>
          getFilteredNews({
            de: filters.de,
            ate: filters.ate,
            destaque: filters.destaque,
            introsize: filters.introsize,
            busca: filters.busca,
          })
      : () => getAllNews({ page: page, perPage: perPage }),
  });

  return (
    <>
      <FilterContainer setFilters={setFilters} />
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
