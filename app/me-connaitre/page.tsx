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
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
            Qui suis-je ?
          </h1>
        </header>

        {/* Présentation avec portrait */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/images/fabrice.jpg"
              alt="Photo de Fabrice Lemaitre, magnétiseur"
              width={400}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-gray-800">
            <p>
              Je suis magnétiseur, guérisseur et coupeur de feu à Combles (Somme).
              Âgé de 55 ans, j'exerce uniquement au cabinet.
            </p>
            <p>
              J'ai pris conscience de ce don depuis 1998 et je le mets en pratique depuis
              2014. En plus de ce don, j'ai suivi une formation à l'école du 3<sup>ème</sup> œil à Ville (60).
              J'aime accompagner les personnes en fin de vie.
            </p>
          </div>
        </section>

        {/* Galerie photos supplémentaires */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Un aperçu de mon univers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: "/images/fabrice3.jpg", alt: "Fabrice Lemaitre - portrait naturel" },
              { src: "/images/fabrice6.jpg", alt: "Fabrice Lemaitre en séance" },
              { src: "/images/fabrice2.jpg", alt: "Détails du cabinet" },
            ].map(({ src, alt }) => (
              <div key={src} className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={src}
                  alt={alt}
                  width={500}
                  height={1500}
                  className="w-full h-full object-cover "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="mt-16 text-center border-t border-gray-200 pt-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Ma mission de vie</h2>
          <p className="mt-4 text-lg text-gray-700">
            J'ai pour mission de vous aider à diminuer ou vous débarrasser de vos douleurs
            physiques et émotionnelles. Mon but est de faire le bien, d'aimer et d'être
            dans la paix et la bienveillance.
          </p>
          <p className="mt-6 text-xl italic text-[var(--primary)]">
            &quot;Ceux qui ont la chance de me connaître disent que c&apos;est la maison du bonheur.&quot;
          </p>
        </section>
      </div>
    </div>
  );
}
