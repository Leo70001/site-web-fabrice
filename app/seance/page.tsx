// src/app/seance/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Séance - Déroulement et Tarifs - Fabrice Lemaitre",
  description:
    "Informations sur le déroulement d'une séance de magnétisme, les tarifs et les modalités de paiement.",
};

export default function SeancePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
            La Séance
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Déroulement, tarifs et informations pratiques.
          </p>
        </header>

        <section className="mt-16 space-y-12">
          {/* Déroulement */}
          <article className="p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--accent)]">
              Déroulement
            </h2>
            <ul className="space-y-3 text-lg text-gray-800 list-disc list-inside">
              <li>La séance dure 45 minutes et se déroule en présentiel au cabinet.</li>
              <li>Je ne programme pas de séances à l’avance.</li>
              <li>Si le patient souhaite une autre séance, il peut me recontacter pour en fixer une.</li>
            </ul>
          </article>

          {/* Tarifs */}
          <article className="p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--accent)]">
              Tarifs et Paiement
            </h2>
            <ul className="space-y-3 text-lg text-gray-800 list-disc list-inside">
              <li>Le tarif d’une séance est de <span className="font-bold">40 euros</span>.</li>
              <li>Le rouleau d’essuie-tout travaillé est proposé à <span className="font-bold">3 euros</span> l’unité.</li>
              <li>Le règlement s’effectue en <span className="font-bold">espèces ou par chèque</span>.</li>
              <li className="font-semibold text-red-600">
                Attention : les cartes bancaires ne sont pas acceptées.
              </li>
            </ul>
          </article>

          {/* Politique d'annulation */}
          <article className="p-8 rounded-lg bg-yellow-50 border border-yellow-300">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-800">
              Politique d&apos;annulation
            </h2>
            <p className="text-lg text-yellow-900">
              Toute séance programmée et non annulée entraînera un refus catégorique de recevoir à nouveau le patient.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
