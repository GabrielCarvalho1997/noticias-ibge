import { useTheme } from "next-themes";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className={`${roboto.className} text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20 bg-red-600`}
    >
      <Link href="/">
        testando
        {/* <Image src="/favicon.svg" alt="ícone de notificas IBGE" />{" "} */}
      </Link>
      <Button
        className="bg-zinc-300"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Trocar o tema
      </Button>
      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link href="/">Página Inicial</Link>
        <Link href="/sitedoIBGE">Site do IBGE</Link>
      </nav>
    </header>
  );
};
