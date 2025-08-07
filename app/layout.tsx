import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabrice Lemaitre - Magnétiseur & Coupeur de Feu dans la Somme",
  description:
    "Fabrice Lemaitre, magnétiseur et coupeur de feu depuis 2014 à Combles (80360), vous aide à soulager vos douleurs physiques et émotionnelles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${lato.className} bg-gray-50 text-gray-800 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
