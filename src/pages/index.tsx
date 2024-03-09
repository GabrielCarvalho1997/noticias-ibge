import HomeContainer from "@/components/Home/HomeContainer";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Notícias IBGE</title>
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen py-6 px-6 md:px-32 space-y-2 md:space-y-4">
        <h1 className="text-4xl font-bold text-primary">Notícias IBGE</h1>
        <HomeContainer />
      </div>
    </>
  );
};

export default Home;
