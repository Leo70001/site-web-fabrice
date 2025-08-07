import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4">

      {/* Section Héros */}
      <FadeIn>
        <section className="relative flex flex-col sm:flex-row items-center gap-10 py-10 sm:py-20 max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative sm:w-1/2 flex justify-center sm:justify-end">
            <Image
              src="/images/fabrice.jpg"
              alt="Portrait de Fabrice Lemaitre, magnétiseur"
              width={500}
              height={700}
              className="w-full max-w-xs sm:max-w-sm h-auto object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Texte d'intro */}
          <div className="sm:w-1/2 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--primary)]">
              Fabrice Lemaitre
            </h1>
            <p className="mt-3 text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
              Magnétiseur, coupeur de feu depuis 2014
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              &quot;J&apos;ai pour mission de vie de vous aider à diminuer ou vous débarrasser de vos douleurs physiques et émotionnelles.&quot;
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a
                href="/interventions"
                className="bg-[var(--accent)] text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-[var(--primary)] transition duration-200"
              >
                Domaines d&apos;intervention
              </a>
              <a
                href="/contact"
                className="bg-gray-200 dark:bg-gray-700 text-[var(--foreground)] font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
              >
                Me contacter
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section "Qui suis-je" */}
      <FadeIn>
        <section className="py-20 bg-[var(--color-card-background)]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Qui suis-je ?</h2>
            <p className="text-center text-lg leading-relaxed text-gray-800 dark:text-gray-300">
              &quot;Magnétiseur guérisseur, coupeur de feu à Combles (Somme), j&apos;exerce uniquement au cabinet.
              J&apos;ai pris conscience de ce don en 1998 et je le mets en pratique depuis 2014.&quot;
            </p>
            <p className="text-center mt-4 italic text-gray-600 dark:text-gray-400">
              &quot;Ceux qui ont la chance de me connaître disent que c&apos;est la maison du bonheur.&quot;
            </p>
            <div className="text-center mt-6">
              <a
                href="/me-connaitre"
                className="text-[var(--accent)] font-semibold hover:underline"
              >
                En savoir plus sur mon parcours →
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Domaines d’intervention */}
      <FadeIn>
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Domaines d’intervention
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
                  Brûlures & Zonas
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Le magnétisme est utilisé pour couper le feu des brûlures domestiques, des zonas
                  et pour soulager les effets secondaires de la radiothérapie et de la chimiothérapie.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
                  Douleurs & Pathologies
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Il aide à traiter les douleurs chroniques, neuropathiques, le psoriasis,
                  les céphalées, l’insomnie, etc.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
                  États Émotionnels
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Libération des blocages énergétiques pour réduire le stress, l’anxiété et les états dépressifs.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 max-w-3xl mx-auto rounded-md">
              <p className="font-bold">Important :</p>
              <p className="mt-1">
                Le magnétisme vient en complément de la médecine traditionnelle.
                En aucun cas, il ne remplace un diagnostic ou un traitement médical.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}