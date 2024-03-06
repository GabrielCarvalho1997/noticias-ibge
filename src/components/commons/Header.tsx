import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        {/* <Image src="/favicon.svg" alt="ícone de notificas IBGE" />{" "} */}
      </Link>
      <nav>
        <Link href="/">Página Inicial</Link>
        <Link href="/sitedoIBGE">Site do IBGE</Link>
      </nav>
    </header>
  );
};
