// src/app/seance/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Séance - Déroulement et Tarifs - Fabrice Lemaitre",
  description: "Informations sur le déroulement d'une séance de magnétisme, les tarifs et les modalités de paiement.",
};

export default function SeancePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
            La Séance
          </h1>
          <p className="mt-4 text-xl">
            Déroulement, tarifs et informations pratiques.
          </p>
        </div>
        <div className="mt-16 space-y-12">
          <div className="p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--accent)]">Déroulement</h3>
            <ul className="space-y-3 text-lg">
              <li>La séance dure 45 Minutes et se pratique en présentiel au cabinet.</li>
              <li>J'ai pour pratique de ne pas programmer plusieurs séances.</li>
              <li>Si le patient a besoin, il me sollicite et je fixe de nouveau une séance.</li>
            </ul>
          </div>
          <div className="p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--accent)]">Tarifs et Paiement</h3>
            <ul className="space-y-3 text-lg">
              <li>Le coût d'une séance est de <span className="font-bold">40 euros</span>.</li>
              <li>Je propose le rouleau d'essuie-tout travaillé au prix de <span className="font-bold">3 euros</span> l'unité.</li>
              <li>Les séances sont payables en <span className="font-bold">espèces ou par chèque</span>.</li>
              <li className="font-semibold text-red-600">Attention : je n'accepte pas la carte bancaire.</li>
            </ul>
          </div>
          <div className="p-8 rounded-lg bg-yellow-50 border border-yellow-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-800">Politique d'Annulation</h3>
            <p className="text-lg text-yellow-900">
              Toute séance programmée et non annulée entraînera un refus catégorique de recevoir de nouveau le patient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}