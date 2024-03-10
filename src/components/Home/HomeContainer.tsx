import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants";
import { getAllNews } from "@/services/getAllNews";
import { Params, getFilteredNews } from "@/services/getFilteredNews";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import CardContainer from "./CardContainer";
import FilterContainer from "./FilterContainer";
import PaginationContainer from "./PaginationContainer";

const HomeContainer = () => {
  const [page, setPage] = useState<number>(DEFAULT_PAGE);
  const [perPage, setPerPage] = useState<number>(DEFAULT_PAGE_SIZE);
  const [filters, setFilters] = useState<Params>();

  const queryFn = filters
    ? () =>
        getFilteredNews({
          page: page,
          perPage: perPage,
          de: filters.de,
          ate: filters.ate,
          destaque: filters.destaque ? 1 : 0,
          introsize: filters.introsize,
          busca: filters.busca,
        })
    : () => getAllNews({ page: page, perPage: perPage });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["news", page, perPage, filters],
    queryFn: queryFn,
  });

  if (isError) {
    toast("Ocorreu um erro ao carregar as notícias", {
      description: "Tente novamente mais tarde",
      action: {
        label: "Recarregar",
        onClick: () => window.location.reload(),
      },
    });
    return (
      <p className="text-lg text-center text-red-500">
        Ocorreu um erro ao carregar as notícias
      </p>
    );
  }

  return (
    <>
      <FilterContainer setFilters={setFilters} />
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap-reverse gap-10 md:gap-12 p-5">
        {isLoading && <Skeleton className="w-full" />}
        {data?.items.map((news) => {
          return (
            <Link
              key={news.id}
              href={{
                pathname: `/${news.id}`,
                query: {
                  id: news.id,
                  page: page,
                  perPage: perPage,
                },
              }}
            >
              <CardContainer news={news} />
            </Link>
          );
        })}
        {data && data?.count > 12 && (
          <Button
            className="col-start-1 w-32 hover:scale-105 hover:bg-primary"
            onClick={() => {
              setPerPage(perPage + 12);
            }}
          >
            Ver mais
          </Button>
        )}
      </main>

      <PaginationContainer data={data} page={page} setPage={setPage} />
    </>
  );
};

export default HomeContainer;
