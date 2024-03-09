import { API_URL_IMAGE } from "@/constants";
import { News } from "@/interface/NewsInterface";
import { getAllNews } from "@/services/getAllNews";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const News = () => {
  const router = useRouter();
  const { id, page, perPage } = router.query ?? {};

  const { data, isLoading, isError } = useQuery({
    queryKey: ["filteredNews", id, page, perPage],
    queryFn: () => filterdNews(),
  });

  const filterdNews = async () => {
    const result = await getAllNews({
      page: Number(page),
      perPage: Number(perPage),
    });

    return result.items.find((news: News) => news.id === Number(id));
  };

  const images = data?.imagens ? JSON.parse(data.imagens) : [];

  if (isLoading) {
    return <p className="text-lg text-center">Carregando...</p>;
  }

  if (!data || isError) {
    return (
      <p className="text-lg text-center text-red-500">
        Ocorreu um erro ao carregar as notícias
      </p>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen py-6 px-6 md:px-32 space-y-2 md:space-y-4">
      <Card className="flex flex-col items-center justify-between rounded-lg p-2 w-3/5">
        <CardHeader className="p-0 mb-6 flex items-center justify-center w-full">
          <Image
            src={API_URL_IMAGE + images.image_fulltext}
            alt={data.titulo}
            width={600}
            height={400}
            priority
            unoptimized
            className="rounded-lg w-full"
          />
        </CardHeader>
        <CardContent className="px-2 ">
          <CardTitle className="text-4xl font-bold mb-4 text-card-foreground">
            {data.titulo}
          </CardTitle>
          <CardDescription className="w-full text-sm justify-end p-0 m-1 mb-3">
            Data de publicação: {data.data_publicacao.split(" ")[0]}
          </CardDescription>
          <CardDescription
            className="text-lg text-justify text-black"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.introducao}
          </CardDescription>
        </CardContent>
        <CardFooter className="w-full text-sm justify-start p-0 pr-1 m-1">
          <span>Confira do site do IBGE:</span>
          <a
            href={data.link}
            target="_blank"
            className="overflow-hidden overflow-ellipsis whitespace-nowrap w-1/2 ml-2 text-blue-500 underline"
          >
            {data.link}
          </a>
        </CardFooter>
      </Card>
    </main>
  );
};

export default News;
