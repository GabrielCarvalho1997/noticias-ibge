import { ThemeProvider } from "@/provider/ThemeProvider";
import { Inter } from "next/font/google";
import { Toaster } from "../ui/sonner";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        {children}
        <Toaster />
      </ThemeProvider>
    </div>
  );
};
