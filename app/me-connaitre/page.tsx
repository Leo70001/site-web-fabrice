// src/app/me-connaitre/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Qui suis-je ? - Fabrice Lemaitre",
  description:
    "Découvrez le parcours de Fabrice Lemaitre, magnétiseur guérisseur et coupeur de feu à Combles dans la Somme.",
};

export default function MeConnaitrePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Titre */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
            Qui suis-je ?
          </h1>
        </div>

        {/* Présentation avec portrait */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <Image
              src="/images/fabrice.jpg"
              alt="Photo de Fabrice Lemaitre, magnétiseur"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-xl leading-8">
              Je suis magnétiseur, guérisseur et coupeur de feu à Combles
              (Somme). Agé de 55 ans, j'exerce uniquement au cabinet.
            </p>
            <p className="mt-6 text-lg leading-7">
              J'ai pris connaissance de ce don depuis 1998 et je le mets en
              pratique depuis 2014. En plus de ce don, j'ai suivi une formation
              à l'école du 3ème œil à Ville (60). J'aime accompagner les
              personnes en fin de vie.
            </p>
          </div>
        </div>

        {/* Galerie photos supplémentaires */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Un aperçu de mon univers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Image
              src="/images/fabrice3.jpg"
              alt="Fabrice Lemaitre - portrait naturel"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-150"
            />
            <Image
              src="/images/fabrice6.jpg"
              alt="Fabrice Lemaitre en séance"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-150"
            />
            <Image
              src="/images/fabrice2.jpg"
              alt="Détails du cabinet"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-150"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold">Ma mission de vie</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            J'ai pour mission de vous aider à diminuer ou vous débarrasser de
            vos douleurs physiques et émotionnelles. Mon but est de faire le
            bien, d'aimer et d'être dans la paix et la bienveillance.
          </p>
          <p className="mt-6 text-xl italic text-[var(--primary)]">
            "Ceux qui ont la chance de me connaitre disent que c'est la maison
            du bonheur."
          </p>
        </div>
      </div>
    </div>
  );
}
