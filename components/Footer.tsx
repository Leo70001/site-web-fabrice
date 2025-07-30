// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold">Fabrice Lemaitre</h3>
            <p className="mt-2 text-green-100">Magnétiseur & Coupeur de feu</p>
            <p className="mt-4 text-green-100">Combles (80360)</p>
            <p className="text-green-100">Région Hauts de France</p>
            <p className="mt-2 text-green-100">Tel: 06.43.61.82.80</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Liens rapides</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/me-connaitre" className="text-green-100 hover:text-white">Me Connaître</Link></li>
              <li><Link href="/interventions" className="text-green-100 hover:text-white">Interventions</Link></li>
              <li><Link href="/seance" className="text-green-100 hover:text-white">La Séance</Link></li>
              <li><Link href="/contact" className="text-green-100 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Une pensée...</h3>
            <p className="mt-4 italic text-green-100">
              "Un grand MERCI à l'univers pour tout ce que nous lui demandons nous le recevons."
            </p>
             <p className="mt-4 font-bold text-green-100">
              "Nous sommes acteur de nos propres pensées."
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-green-700 pt-8 text-center text-sm text-green-200">
          <p>&copy; {new Date().getFullYear()} Fabrice Lemaitre. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}