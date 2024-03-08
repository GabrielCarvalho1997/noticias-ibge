import { getAllNews } from "@/services/getAllNews";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Link from "next/link";

const News = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    staleTime: 1000 * 60 * 5,
    queryFn: getAllNews,
  });

  console.log(data);

  return (
    <>
      <Head>
        <title>Notícia</title>
      </Head>
      <div>
        <h1>News</h1>
        {isLoading ? (
          <p>Carregando...</p>
        ) : isError ? (
          <p>Ocorreu um erro ao carregar os dados</p>
        ) : (
          <ul>
            {data?.map((news) => (
              <li key={news.id}>
                <h2>{news.title}</h2>
                <p>{news.description}</p>
              </li>
            ))}
          </ul>
        )}
        <Link href="/">Ir para a pagina inicial</Link>
      </div>
    </>
  );
};

export default News;
