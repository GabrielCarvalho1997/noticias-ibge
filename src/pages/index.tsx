import HomeContainer from "@/components/Home/HomeContainer";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Notícias IBGE</title>
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-8 md:space-y-16">
        <h1>Notícias IBGE</h1>
        <Link href="/news">Ir para a notícia</Link>
        <HomeContainer />
      </div>
    </>
  );
};

export default Home;
