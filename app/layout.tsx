import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
import { AlternativeFooter } from "./components/footer/alternative-footer";
import Navbar from "./components/layout/navbar";
import { GeistSans } from "geist/font";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Merchlife",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Providers>
          <Navbar />
          <Suspense>
            <main className="bg-background text-foreground dark">
              {children}
            </main>
            <AlternativeFooter />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
