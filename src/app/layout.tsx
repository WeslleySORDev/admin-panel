import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider";
import { ProductProvider } from "../contexts/ProductContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Painel Administrativo - Loja",
  description:
    "Painel administrativo para gerenciamento de produtos da loja física",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ProductProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
