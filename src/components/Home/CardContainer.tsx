import { API_URL_IMAGE } from "@/constants";
import { News } from "@/interface/NewsInterface";
import Image from "next/image";
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
    <Card className="flex flex-col items-center justify-between rounded-lg overflow-hidden hover:bg-purple-100 dark:hover:bg-gray-600 h-[550px] transform transition hover:scale-105">
      <CardHeader className="p-0 mb-2 flex items-center justify-center">
        <Image
          src={API_URL_IMAGE + images.image_intro}
          alt={news.titulo}
          width={375}
          height={250}
          priority
          unoptimized
          className="w-full"
        />
      </CardHeader>
      <CardContent className="p-4 flex-1 flex flex-col">
        <CardTitle className="text-lg leading-tight font-bold mb-4 text-card-foreground">
          {news.titulo}
        </CardTitle>
        <CardDescription
          className="text-sm leading-relaxed text-justify"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {news.introducao}
        </CardDescription>
        <CardFooter className="w-full text-xs justify-end p-0 mt-auto">
          Data de publicação: {news.data_publicacao.split(" ")[0]}
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default CardContainer;
