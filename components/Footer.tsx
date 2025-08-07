// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Fabrice Lemaitre</h3>
            <p className="mt-2 text-gray-200">Magnétiseur & Coupeur de feu</p>
            <p className="mt-4 text-gray-200">28 bis rue de Péronne Combles (80360)</p>
            <p className="text-gray-200">Région Hauts de France</p>
            <p className="mt-2 text-gray-200">Tel: 06.43.61.82.80</p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold">Liens rapides</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/me-connaitre" className="text-gray-200 hover:text-white">Me Connaître</Link></li>
              <li><Link href="/interventions" className="text-gray-200 hover:text-white">Interventions</Link></li>
              <li><Link href="/seance" className="text-gray-200 hover:text-white">La Séance</Link></li>
              <li><Link href="/contact" className="text-gray-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* --- SECTION MODIFIÉE --- */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold">Remerciements</h3>
            <p className="mt-4 text-gray-200 text-sm leading-relaxed">
              Merci à Pascal Vidal, Nicole Gatou et Jean-Claude Louvet pour leur guidance. Une pensée spéciale pour ma première patiente, Gilette Letalleur, et pour tous ceux qui m'ont accordé leur confiance.
            </p>
            <p className="mt-4 font-bold text-gray-200">
              "Nous sommes acteur de nos propres pensées."
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-green-700 pt-6 text-center text-sm text-gray-300">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Fabrice Lemaitre. Tous droits réservés.</span>
            <div className="flex gap-x-4">
              <Link href="/mentions-legales" className="hover:text-white underline">Mentions Légales</Link>
              <Link href="/politique-de-confidentialite" className="hover:text-white underline">Politique de Confidentialité</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}