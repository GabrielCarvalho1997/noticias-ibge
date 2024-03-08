import { Button } from "@/components/ui/button";
import { getNewsById } from "@/services/getNewsById";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  const { theme, setTheme } = useTheme();
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["news"],
  //   queryFn: getAllNews,
  // });

  // Busca uma noticia unica
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    queryFn: () => getNewsById("39365"),
  });

  // {
  //   isLoading ? (
  //     <p>Carregando...</p>
  //   ) : isError ? (
  //     <p>Ocorreu um erro ao carregar os dados</p>
  //   ) : (
  //     <ul>
  //       {data?.map((news) => (
  //         <li key={news.id}>
  //           <h2>{news.title}</h2>
  //           <p>{news.description}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  console.log(data);

  return (
    <>
      <Head>
        <title>Notícias IBGE</title>
      </Head>
      <main>
        <h1>Notícias IBGE</h1>
        <Button
          className="bg-zinc-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Trocar o tema
        </Button>
        <Link href="/news">Ir para a notícia</Link>
      </main>
    </>
  );
};

export default Home;
