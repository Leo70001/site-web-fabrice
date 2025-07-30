// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// On importe les nouveaux composants
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabrice Lemaitre - Magnétiseur & Coupeur de Feu dans la Somme",
  description: "Fabrice Lemaitre, magnétiseur et coupeur de feu depuis 2014 à Combles (80360), vous aide à soulager vos douleurs physiques et émotionnelles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-50 text-gray-800 flex flex-col min-h-screen`}>
        {/* On ajoute le Header ici */}
        <Header />
        
        {/* Le contenu de chaque page sera flexible et poussera le footer vers le bas */}
        <main className="flex-grow">
          {children} 
        </main>

        {/* On ajoute le Footer ici */}
        <Footer />
      </body>
    </html>
  );
}