import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import GlobalServerListener from "./GlobalServerListener";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce test",
  description: "Ecommerce test",
};

import { Header, ProductsProvider } from "@ui/organisms"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalServerListener />
        <ProductsProvider >
          <Header />
          <main>
            {children}
          </main>
        </ProductsProvider>
      </body>
    </html>
  );
}
