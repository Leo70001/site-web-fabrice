// src/app/le-magnetisme/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Le Magnétisme & Coupeur de Feu - Fabrice Lemaitre",
    description:
        "Découvrez ce qu'est le magnétisme curatif, le rôle d'un coupeur de feu et comment ces pratiques peuvent vous aider à soulager vos douleurs.",
};

// Composant pour l'icône de flamme
const FireIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 mx-auto text-[var(--accent)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 16.121A5 5 0 0012.014 13m2.828-2.828A5 5 0 0012.014 13m0 0a4.973 4.973 0 013.535 3.535M12.014 13a4.973 4.973 0 00-3.535 3.535"
        />
    </svg>
);

// Composant pour l'icône de main
const HandIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 mx-auto text-[var(--primary)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0c-.454-.303-.977-.454-1.5-.454V12.03a2.704 2.704 0 01.9-2.031l5.74-5.74a.564.564 0 01.8 0l5.74 5.74a2.704 2.704 0 01.9 2.031v3.516z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 15.546c.523 0 1.046.151 1.5.454a2.704 2.704 0 013 0 2.704 2.704 0 003 0 2.704 2.704 0 013 0 2.704 2.704 0 003 0c.454-.303.977-.454 1.5-.454"
        />
    </svg>
);

export default function LeMagnetismePage() {
    return (
        <div className="bg-gray-50">
            {/* Section d'en-tête (Hero) */}
            <div className="text-center py-20 sm:py-24 bg-white shadow-sm">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary)]">
                        Le Magnétisme et le Don de Coupeur de Feu
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Une approche complémentaire pour rééquilibrer vos énergies, apaiser
                        vos douleurs et retrouver un bien-être.
                    </p>
                </div>
            </div>

            {/* Contenu principal de la page */}
            <div className="container mx-auto px-4 py-16 sm:py-20 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Carte pour le Magnétisme */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                        <HandIcon />
                        <h2 className="text-3xl font-semibold text-center mt-4 mb-6 text-[var(--primary)]">
                            Qu'est-ce que le Magnétisme ?
                        </h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Le magnétisme est une pratique ancestrale qui repose sur
                                l'idée qu'un fluide énergétique circule en chacun de nous.
                                Parfois, des blocages, des fuites ou des déséquilibres dans
                                cette circulation peuvent entraîner des douleurs physiques ou
                                des troubles émotionnels.
                            </p>
                            <p>
                                Le rôle du magnétiseur est d'utiliser sa propre énergie,
                                transmise par l'imposition des mains, pour rééquilibrer et
                                harmoniser le flux énergétique de la personne. Cela aide le
                                corps à mobiliser ses propres capacités de guérison.
                            </p>
                            <p>
                                Il aide à combattre le stress, l'anxiété, les problèmes de peau
                                comme le psoriasis, ou encore les troubles du sommeil.
                            </p>
                            <p>
                                <strong>
                                    Le magnétisme peut également renforcer la vitalité générale
                                    et favoriser un état de relaxation profonde.
                                </strong>
                            </p>
                        </div>

                        {/* Galerie images Magnétisme */}
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {/* Remplace les URLs ci-dessous par tes liens d'images */}
                            <img
                                src="/images/magnetisme1.jpg"
                                alt="Exemple de séance de magnétisme 1"
                                className="rounded-lg object-cover w-full h-24"
                            />
                            <img
                                src="/images/magnetisme2.jpg"
                                alt="Exemple de séance de magnétisme 2"
                                className="rounded-lg object-cover w-full h-24"
                            />
                            <img
                                src="/images/magnetisme3.jpg"
                                alt="Exemple de séance de magnétisme 3"
                                className="rounded-lg object-cover w-full h-24"
                            />
                        </div>
                    </div>

                    {/* Carte pour Coupeur de Feu */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                        <FireIcon />
                        <h2 className="text-3xl font-semibold text-center mt-4 mb-6 text-[var(--accent)]">
                            Qu'est-ce qu'un Coupeur de Feu ?
                        </h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <p>
                                L'action de "couper le feu" est une application spécifique du
                                magnétisme, particulièrement connue pour son efficacité sur les
                                douleurs liées aux brûlures.
                            </p>
                            <p>
                                Un coupeur de feu intervient pour apaiser la sensation de
                                brûlure et aider à la cicatrisation. Cette pratique est souvent
                                sollicitée pour :
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Les brûlures domestiques et coups de soleil.</li>
                                <li>Le "feu" du zona.</li>
                                <li>Les effets secondaires des traitements de radiothérapie.</li>
                            </ul>
                            <p>
                                Cette pratique offre un soulagement rapide et significatif de
                                la douleur liée au "feu".
                            </p>
                            <p>
                                <strong>
                                    Le coupeur de feu travaille également sur l’énergie autour de
                                    la zone affectée, contribuant à accélérer le processus de
                                    guérison.
                                </strong>
                            </p>
                        </div>

                        {/* Galerie images Coupeur de Feu */}
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {/* Remplace les URLs ci-dessous par tes liens d'images */}
                            <img
                                src="/images/coupeurfeu1.jpg"
                                alt="Exemple de coupeur de feu 1"
                                className="rounded-lg object-cover w-full h-24"
                            />
                            <img
                                src="/images/coupeurfeu2.jpg"
                                alt="Exemple de coupeur de feu 2"
                                className="rounded-lg object-cover w-full h-24"
                            />
                            <img
                                src="/images/coupeurfeu3.jpg"
                                alt="Exemple de coupeur de feu 3"
                                className="rounded-lg object-cover w-full h-24"
                            />
                        </div>
                    </div>
                </div>

                {/* Bloc d'avertissement et appel à l'action */}
                <div className="mt-20 max-w-3xl mx-auto text-center bg-yellow-100 border-t-4 border-yellow-500 text-yellow-800 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">Important à savoir</h2>
                    <p className="mt-4 text-lg">
                        En aucun cas, le magnétiseur ne pose de diagnostic ou ne remplace un
                        traitement médical prescrit par un médecin. Ces pratiques viennent
                        en complément de la médecine traditionnelle.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block mt-6 bg-[var(--accent)] text-white font-bold py-3 px-6 rounded-lg hover:bg-[var(--primary)] transition-colors no-underline text-lg"
                    >
                        Prendre rendez-vous
                    </Link>
                </div>
            </div>
        </div>
    );
}
