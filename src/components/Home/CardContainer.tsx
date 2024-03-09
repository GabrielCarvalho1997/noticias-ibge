import { API_URL_IMAGE } from "@/constants";
import { News } from "@/interface/NewsInterface";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface CardContainerProps {
  news: News;
}

const CardContainer = ({ news }: CardContainerProps) => {
  const images = news.imagens ? JSON.parse(news.imagens) : [];
  return (
    <Link
      href={{
        pathname: `/${news.id}`,
        query: { news: JSON.stringify(news) },
      }}
    >
      <Card
        key={news.id}
        className="flex flex-col items-center justify-between rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <CardHeader className="p-0 mb-6 flex items-center justify-center">
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
        <CardContent className="px-2">
          <CardTitle className="text-md font-bold mb-4 text-card-foreground">
            {news.titulo}
          </CardTitle>
          <CardDescription
            className="text-sm text-justify"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {news.introducao}
          </CardDescription>
        </CardContent>
        <CardFooter className="w-full text-xs justify-end p-0 pr-1 m-1">
          Data de publicação: {news.data_publicacao.split(" ")[0]}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardContainer;
