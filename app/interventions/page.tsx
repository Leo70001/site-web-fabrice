// src/app/interventions/page.tsx
import type { Metadata } from "next";
import SEO from "@/components/SEO";
import { businessSchema } from "@/seoData";

export const metadata: Metadata = {
  title: "Domaines d&apos;Interventions - Fabrice Lemaitre",
  description: "Le magnétisme pour soulager les brûlures, zonas, douleurs, stress, anxiété et libérer les blocages énergétiques.",
};

export default function InterventionsPage() {
  return (
    <>
      <SEO
        title="Intervention - Fabrice Lemaitre Magnétiseur"
        description="Domaine où Fabrice LEMAITRE intervient."
        keywords="intervention magnétiseur Combles, rendez-vous magnétiseur Somme"
        url="https://www.coupeur-de-feu-magnetiseur-fabrice-lemaitre.fr/interventions"
        structuredData={businessSchema}
      />

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
            Domaines d&apos;interventions
          </h1>
          <p className="mt-6 text-lg">
            Le magnétisme vient en complément de la médecine traditionnelle. Il vous aide à combattre les maladies, le stress, les angoisses et l&apos;anxiété passagère ou chronique.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[var(--magn_bg)] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--accent)]">Couper le feu &amp; la peau</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Brûlures domestiques</li>
              <li>Zonas</li>
              <li>Soulagement des effets de la radiothérapie et chimiothérapie</li>
              <li>Verrues</li>
              <li>Psoriasis</li>
            </ul>
          </div>
          <div className="bg-[var(--magn_bg)] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--accent)]">Douleurs &amp; Troubles</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Douleurs neuropathiques</li>
              <li>Céphalées (maux de tête)</li>
              <li>Insomnie</li>
              <li>Libération des blocages énergétiques</li>
              <li>Évacuation des énergies négatives</li>
            </ul>
          </div>
          <div className="bg-[var(--magn_bg)] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--accent)]">États Émotionnels</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Stress</li>
              <li>Anxiété</li>
              <li>Déprime</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-[var(--accent)]">Et aussi pour les animaux...</h3>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            J&apos;ai aussi aidé des animaux et c&apos;est un réel plaisir de le faire car ils prennent nos bien faits et savent nous le rendre.
          </p>
        </div>
        <div className="mt-16 text-center bg-[var(--warning_bg)] border-l-4 border-[var(--warning_border)] text-[var(--warning_text)] p-6 max-w-3xl mx-auto rounded-md shadow">
          <p className="font-bold text-xl">Avertissement important</p>
          <p className="mt-2 text-lg">En aucun cas, je ne diagnostique ou ne remplace un traitement médical.</p>
        </div>
      </div>
    </>
  );
}
