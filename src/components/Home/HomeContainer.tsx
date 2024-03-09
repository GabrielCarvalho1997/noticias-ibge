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
    <main className="grid grid-cols-3 flex-wrap-reverse gap-10 md:gap-16 p-5">
      {isLoading && <p className="text-lg text-center">Carregando...</p>}
      {isError && (
        <p className="text-lg text-center text-red-500">
          Ocorreu um erro ao carregar as notícias
        </p>
      )}
      {data?.items?.map((news) => {
        const images = JSON.parse(news.imagens);
        return (
          <Card
            key={news.id}
            className="w-128 h-128 flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={API_URL_IMAGE + images.image_intro}
              alt={news.titulo}
              width={375}
              height={250}
              priority
              unoptimized
            />
            <div className="px-5 py-4">
              <h2 className="text-md text-justify font-bold mb-4">
                {news.titulo}
              </h2>
              <p className="text-sm text-gray-700">{news.introducao}</p>
            </div>
          </Card>
        );
      })}
    </main>
  );
};

export default HomeContainer;
