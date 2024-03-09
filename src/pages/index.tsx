import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { API_URL_IMAGE } from "@/constants";
import { getAllNews } from "@/services/getAllNews";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const { theme, setTheme } = useTheme();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
  });

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
        {isLoading && <p>Carregando...</p>}
        {isError && <p>Ocorreu um erro ao carregar as notícias</p>}
        <div className="grid grid-cols-3 gap-4">
          {data?.items?.map((news) => {
            const images = JSON.parse(news.imagens);
            return (
              <Card key={news.id} className="col-span-1">
                <Image
                  src={API_URL_IMAGE + images.image_intro}
                  alt={news.titulo}
                  width={300}
                  height={200}
                  priority
                  unoptimized
                />
                <h2>{news.titulo}</h2>
                <p>{news.introducao}</p>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
