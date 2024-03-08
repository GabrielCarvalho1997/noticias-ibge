import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <Header />
      {children}
    </div>
  );
};
