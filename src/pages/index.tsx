import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Notícias IBGE</title>
      </Head>
      <main>
        <h1>Notícias IBGE</h1>
        <Link href="/news">Ir para a notícia</Link>
      </main>
    </>
  );
};

export default Home;
