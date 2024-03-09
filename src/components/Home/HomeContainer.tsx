import { API_URL_IMAGE } from "@/constants";
import { getAllNews } from "@/services/getAllNews";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Card } from "../ui/card";

const HomeContainer = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
  });
  return (
    <main className=" grid grid-cols-3 flex-wrap-reverse gap-10 md:gap-16">
      {isLoading && <p>Carregando...</p>}
      {isError && <p>Ocorreu um erro ao carregar as notícias</p>}
      {data?.items?.map((news) => {
        const images = JSON.parse(news.imagens);
        return (
          <Card
            key={news.id}
            className="w-128 h-128 flex flex-col items-center"
          >
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
    </main>
  );
};

export default HomeContainer;
