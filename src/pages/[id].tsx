import { Skeleton } from "@/components/ui/skeleton";
import { API_URL_IMAGE } from "@/constants";
import { News } from "@/interface/NewsInterface";
import { getAllNews } from "@/services/getAllNews";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "sonner";
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

  if (!data || isLoading) {
    return <Skeleton className="w-full" />;
  }

  if (isError) {
    toast("Ocorreu um erro ao carregar a notícia", {
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
    <main className="flex flex-col items-center py-6 px-6 space-y-2 md:space-y-4">
      {isLoading && <Skeleton className="w-full" />}
      <Card className="flex flex-col items-center justify-between rounded-lg p-4 md:w-4/5 lg:w-4/6 xl:w-3/5">
        <CardHeader className="p-0 mb-6 flex items-center justify-center w-full">
          <Image
            src={API_URL_IMAGE + images.image_fulltext}
            alt={data.titulo}
            width={500}
            height={300}
            priority
            unoptimized
            className="rounded-lg w-full"
          />
        </CardHeader>
        <CardContent className="px-2 ">
          <CardTitle className="text-4xl sm:text-xl md:text-3xl lg:text-5xl font-bold mb-4 text-card-foreground">
            {data.titulo}
          </CardTitle>
          <CardDescription className="w-full text-sm md:text-base lg:text-lg justify-end p-0 m-1 mb-3">
            Data de publicação: {data.data_publicacao.split(" ")[0]}
          </CardDescription>
          <CardDescription
            className="text-lg md:text-xl lg:text-2xl text-justify text-black dark:text-white"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.introducao}
          </CardDescription>
        </CardContent>
        <CardFooter className="w-full text-xs sm:text-sm md:text-base justify-start p-0 pr-1 m-1">
          <a
            href={data.link}
            target="_blank"
            className="overflow-hidden overflow-ellipsis w-1/2 sm:w-3/4 md:w-full ml-2 text-blue-500 underline"
          >
            Confira do site do IBGE
          </a>
        </CardFooter>
      </Card>
    </main>
  );
};

export default News;
