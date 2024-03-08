import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  const { theme, setTheme } = useTheme();

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
