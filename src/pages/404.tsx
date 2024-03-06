import Head from "next/head";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div>
        <h1>404: Not found</h1>
        <div>
          <p>Não conseguimos encontrar essa página</p>
          <span>
            Clique no botão abaixo para ser redirecionado à Página Inicial
          </span>
        </div>
        <Link href="/">Ir para a página inicial</Link>
      </div>
    </>
  );
};

export default NotFoundPage;
