// src/app/page.tsx
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="container mx-auto px-4">

      {/* Section Héros - L'accueil principal */}
      <FadeIn>
        <section className="relative flex flex-col sm:flex-row items-center gap-6 py-4 sm:py-6 px-6 max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative sm:w-1/2 flex justify-center sm:justify-end">
            <img
              src="/images/fabrice.jpg"
              alt="Fabrice Lemaitre"
              className="max-w-sm sm:max-w-md w-full h-auto object-contain"
            />
          </div>

          {/* Texte */}
          <div className="text-center sm:text-left sm:w-1/2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--primary)]">
              Fabrice Lemaitre
            </h1>
            <p className="mt-2 text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
              Magnétiseur, coupeur de feu depuis 2014
            </p>
            <p className="mt-3 max-w-2xl text-lg mx-auto sm:mx-0 leading-relaxed text-gray-600 dark:text-gray-400">
              "J’ai pour mission de vie de vous aider à diminuer ou débarrasser de vos douleurs physiques et émotionnelles."
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a
                href="/interventions"
                className="bg-[var(--accent)] text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg hover:bg-[var(--primary)] transition-all duration-200"
              >
                Domaines d'interventions
              </a>
              <a
                href="/contact"
                className="bg-gray-200 dark:bg-gray-700 text-[var(--foreground)] font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
              >
                Me Contacter
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section de Présentation rapide avec animation */}
      <FadeIn>
        <section className="py-16 bg-[var(--color-card-background)]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Qui suis-je ?</h2>
            <p className="text-center text-lg">
              "Magnétiseur guérisseur, coupeur de feu à Combles (Somme) [...] j’ exerce uniquement au cabinet."
              "J’ai pris connaissance de ce don depuis 1998 et je le met en pratique depuis 2014."
            </p>
            <p className="text-center mt-4 italic text-gray-600 dark:text-gray-400">
              "Ceux qui ont la chance de me connaitre disent que c’est la maison du bonheur."
            </p>
            <div className="text-center mt-8">
              <a href="/me-connaitre" className="text-[var(--accent)] font-semibold hover:underline">
                En savoir plus sur mon parcours →
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section Aperçu des Interventions avec animation */}
      <FadeIn>
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Domaines d’interventions</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">Brûlures & Zonas</h3>
              <p>Le magnétisme est aussi utilisé pour couper le feu des brûlures domestiques, des zonas et soulage des effets secondaires de la radiothérapie et chimiothérapie.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">Douleurs & Pathologies</h3>
              <p>Il permet de traiter [...] les douleurs neuropathiques [...] le psoriasis, les céphalées, l’insomnie etc…</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">États Émotionnels</h3>
              <p>Libération des blocages énergétiques pour traiter le stress, l’anxiété et la déprime.</p>
            </div>
          </div>
          <div className="mt-12 text-center bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 max-w-3xl mx-auto rounded-md">
            <p className="font-bold">Important :</p>
            <p>Le magnétisme vient en complément de la médecine traditionnelle. En aucun cas, je diagnostique ou remplace un traitement.</p>
          </div>
        </section>
      </FadeIn>

    </div>
  );
}
