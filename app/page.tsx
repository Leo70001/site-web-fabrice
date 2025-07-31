// src/app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-20 sm:py-32">
        <h1 className="text-4xl sm:text-6xl font-bold text-[var(--primary)]">
          Fabrice Lemaitre
        </h1>
        <p className="mt-4 text-xl sm:text-2xl">
          Magnétiseur, coupeur de feu depuis 2014
        </p>
        <p className="mt-8 max-w-2xl mx-auto text-lg">
          "J'ai pour mission de vie de vous aider à diminuer ou débarasser de vos douleurs physiques et émotionnelles."
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/interventions" className="bg-[var(--accent)] text-white font-bold py-3 px-6 rounded-lg hover:bg-[var(--primary)] transition-colors">
            Domaines d'interventions
          </a>
          <a href="/contact" className="bg-gray-200 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
            Me Contacter
          </a>
        </div>
      </section>
      <section className="py-16 bg-white rounded-xl shadow-md">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Qui suis-je ?</h2>
          <p className="text-center text-lg">
            "Magnétiseur guérisseur, coupeur de feu à Combles (Somme)  j' exerce uniquement au cabinet." "J'ai pris connaissance de ce don depuis 1998 et je le met en pratique depuis 2014."
          </p>
          <p className="text-center mt-4 italic text-gray-600">
            "Ceux qui ont la chance de me connaitre disent que c'est la maison du bonheur."
          </p>
          <div className="text-center mt-8">
            <a href="/me-connaitre" className="text-[var(--accent)] font-semibold hover:underline">
              En savoir plus sur mon parcours →
            </a>
          </div>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Domaines d'interventions</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">Brûlures & Zonas</h3>
            <p>Le magnétisme est aussi utilisé pour couper le feu des brulûres domestiques, des zonas et soulage des effets secondaires de la radiathéraphie et chimiothérapie.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">Douleurs & Pathologies</h3>
            <p>Il permet de traiter les douleurs neuropathiques le psoriasis, les céphalées, l'insomnie etc…..</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">États Émotionnels</h3>
            <p>Libération des blocages énergétiques pour traiter le stress, l'anxiété et la déprime.</p>
          </div>
        </div>
        <div className="mt-12 text-center bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 max-w-3xl mx-auto rounded-md">
          <p className="font-bold">Important :</p>
          <p>Le magnétisme vient en complément de la médecine traditionnelle. En aucun cas, je diagnostique ou remplace un traitement.</p>
        </div>
      </section>
    </div>
  );
}