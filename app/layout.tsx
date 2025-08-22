import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabrice Lemaitre - Magnétiseur & Coupeur de Feu dans la Somme",
  description:
    "Fabrice Lemaitre, magnétiseur et coupeur de feu depuis 2014 à Combles (80360), vous aide à soulager vos douleurs physiques et émotionnelles.",
  viewport: "width=device-width, initial-scale=1.0",
  other: {
    "color-scheme": "light dark", // ✅ iOS Safari respecte clair/sombre
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${lato.className} bg-gray-50 text-gray-800 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
