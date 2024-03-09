import { API_URL_IMAGE } from "@/constants";
import { getAllNews } from "@/services/getAllNews";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
            className="flex flex-col items-center rounded-lg p-2"
          >
            <CardHeader className="p-0 w-full h-250 mb-6 flex items-center justify-center">
              <Image
                src={API_URL_IMAGE + images.image_intro}
                alt={news.titulo}
                width={375}
                height={250}
                priority
                unoptimized
                className="rounded-lg"
              />
            </CardHeader>
            <CardContent className="px-2 w-full h-64">
              <CardTitle className="text-md text-justify font-bold mb-4">
                {news.titulo}
              </CardTitle>
              <CardDescription className="text-sm">
                {news.introducao}
              </CardDescription>
            </CardContent>
            <CardFooter className="w-full h-16">rodapé</CardFooter>
          </Card>
        );
      })}
    </main>
  );
};

export default HomeContainer;
