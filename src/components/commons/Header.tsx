import { SITE_IBGE } from "@/constants";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className={`${roboto.className} text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20 bg-primary`}
    >
      <Link
        href="/"
        className="text-xl	font-bold text-primary-foreground hover:bg-purple-950 p-2 rounded-md transition-all"
      >
        Página Inicial
      </Link>
      <h1 className="text-3xl font-bold text-primary-foreground">
        Notícias IBGE
      </h1>
      <nav className="flex items-center gap-10 text-md ">
        <a
          href={SITE_IBGE}
          target="_blank"
          className="text-primary-foreground hover:bg-purple-950 p-2 rounded-md transition-all"
        >
          Site do IBGE
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-13 h-7">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};
