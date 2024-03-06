import Head from "next/head";
import Link from "next/link";

const News = () => {
  return (
    <>
      <Head>
        <title>Notícia</title>
      </Head>
      <div>
        <h1>News</h1>
        <Link href="/">Ir para a pagina inicial</Link>
      </div>
    </>
  );
};

export default News;
