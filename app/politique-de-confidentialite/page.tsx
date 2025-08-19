// src/app/politique-de-confidentialite/page.tsx
import type { Metadata } from "next";
import SEO from "@/components/SEO";
import { businessSchema } from "@/seoData";

export const metadata: Metadata = {
    title: "Politique de Confidentialité - Fabrice Lemaitre",
    robots: {
        index: false,
        follow: true,
    },
};

export default function PolitiqueDeConfidentialitePage() {
    return (
        <>
            <SEO
                title="Contact - Fabrice Lemaitre Magnétiseur"
                description="Prenez rendez-vous avec Fabrice Lemaitre, magnétiseur et coupeur de feu à Combles."
                keywords="contact magnétiseur Combles, rendez-vous magnétiseur Somme"
                image="/images/fabrice4.jpg"
                url="https://www.coupeur-de-feu-magnetiseur-fabrice-lemaitre.fr/politique-de-confidentialite"
                structuredData={businessSchema}
            />

            <div className="bg-white py-16">
                <div className="container mx-auto px-4 max-w-4xl prose lg:prose-xl">
                    <h1>Politique de confidentialité</h1>

                    <article>
                        <h3>ARTICLE 1 : PRÉAMBULE</h3>
                        <p>La présente politique de confidentialité a pour but d&apos;informer les utilisateurs du site :</p>
                        <ul>
                            <li>Sur la manière dont sont collectées et traitées leurs données à caractère personnel ;</li>
                            <li>Sur leurs droits concernant ces données ;</li>
                            <li>Sur l&apos;identité du responsable du traitement ;</li>
                            <li>Sur l&apos;utilisation des fichiers &quot;cookies&quot;.</li>
                        </ul>
                    </article>

                    <article>
                        <h3>ARTICLE 2 : PRINCIPES GÉNÉRAUX EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DE DONNÉES</h3>
                        <p>
                            Conformément à l&apos;article 5 du Règlement européen 2016/679 (RGPD), la collecte et le traitement des données
                            respectent les principes suivants :
                        </p>
                        <ul>
                            <li><strong>Licéité, loyauté et transparence :</strong> consentement de l&apos;utilisateur requis.</li>
                            <li><strong>Finalités limitées :</strong> traitement pour des objectifs déterminés et légitimes.</li>
                            <li><strong>Minimisation :</strong> seules les données strictement nécessaires sont collectées.</li>
                            <li><strong>Intégrité et confidentialité :</strong> sécurité et confidentialité garanties.</li>
                        </ul>
                    </article>

                    <article>
                        <h3>ARTICLE 3 : DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES</h3>
                        <p>Données collectées sur le site :</p>
                        <ul>
                            <li><strong>Formulaire de contact :</strong> nom, prénom, email, téléphone, message.</li>
                            <li><strong>Formulaire de témoignage :</strong> nom, contenu du témoignage.</li>
                        </ul>
                        <p>
                            Ces données sont collectées lors de l&apos;envoi d&apos;un formulaire par l&apos;utilisateur. Elles sont conservées
                            uniquement pour la finalité du traitement, et dans le respect du cadre légal.
                        </p>
                    </article>

                    <article>
                        <h3>ARTICLE 4 : RESPONSABLE DU TRAITEMENT</h3>
                        <p>
                            Le responsable du traitement des données est <strong>Fabrice LEMAITRE</strong>, joignable à :
                            <br />
                            <a href="mailto:fabricelemaitremagnetiseur@gmail.com">fabricelemaitremagnetiseur@gmail.com</a>
                        </p>
                        <p>Il détermine les finalités et les moyens du traitement des données personnelles.</p>
                    </article>

                    <article>
                        <h3>ARTICLE 5 : DROITS DE L&apos;UTILISATEUR</h3>
                        <p>Conformément à la réglementation, l&apos;utilisateur dispose des droits suivants :</p>
                        <ul>
                            <li>Droit d&apos;accès, de rectification et d&apos;effacement ;</li>
                            <li>Droit de limitation et d&apos;opposition au traitement ;</li>
                            <li>Droit à la portabilité de ses données.</li>
                        </ul>
                        <p>
                            Ces droits peuvent être exercés par email à :
                            <a href="mailto:fabricelemaitremagnetiseur@gmail.com">fabricelemaitremagnetiseur@gmail.com</a>
                        </p>
                    </article>

                    <article>
                        <h3>ARTICLE 6 : UTILISATION DES COOKIES</h3>
                        <p>
                            Le site n&apos;utilise que des cookies techniques, strictement nécessaires à son bon fonctionnement. Aucun
                            cookie de suivi ou de mesure d&apos;audience n&apos;est utilisé sans consentement.
                        </p>
                    </article>

                    <article>
                        <h3>ARTICLE 7 : MODIFICATIONS</h3>
                        <p>
                            La présente politique peut être modifiée à tout moment pour garantir sa conformité avec la loi en vigueur.
                            Les utilisateurs sont invités à la consulter régulièrement.
                        </p>
                        <p>Dernière mise à jour : 7 août 2025.</p>
                    </article>
                </div>
            </div>
        </>
    );
}
