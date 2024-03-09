import { ThemeProvider } from "@/provider/ThemeProvider";
import { Inter } from "next/font/google";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
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
      </ThemeProvider>
    </div>
  );
};
