import type { Metadata, Viewport } from "next";
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
  other: {
    "color-scheme": "light dark", // ✅ ensures browsers know you support both
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      {/* ✅ Use CSS variables instead of hardcoded Tailwind gray */}
      <body
        className={`${lato.className} bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
