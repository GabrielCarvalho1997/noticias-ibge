import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const Header = () => {
  return (
    <header className={roboto.className}>
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
