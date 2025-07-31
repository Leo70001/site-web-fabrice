// src/app/politique-de-confidentialite/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité - Fabrice Lemaitre",
    robots: {
        index: false,
        follow: true,
    },
};

export default function PolitiqueDeConfidentialitePage() {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 max-w-4xl prose lg:prose-xl">
                <h1>Politique de Confidentialité</h1>

                <article>
                    <h3>ARTICLE 1 : PRÉAMBULE</h3>
                    <p>La présente politique de confidentialité a pour but d'informer les utilisateurs du site :</p>
                    <ul>
                        <li>Sur la manière dont sont collectées et traitées leurs données à caractère personnel.</li>
                        <li>Sur leurs droits concernant ces données.</li>
                        <li>Sur l'identité du responsable du traitement des données à caractère personnel collectées et traitées.</li>
                        <li>Sur l'utilisation des fichiers "cookies".</li>
                    </ul>
                </article>

                <article>
                    <h3>ARTICLE 2 : PRINCIPES GÉNÉRAUX EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DE DONNÉES</h3>
                    <p>Conformément aux dispositions de l'article 5 du Règlement européen 2016/679 (RGPD), la collecte et le traitement des données des utilisateurs du site respectent les principes suivants :</p>
                    <ul>
                        <li><strong>Licéité, loyauté et transparence :</strong> Les données ne peuvent être collectées et traitées qu'avec le consentement de l'utilisateur propriétaire des données.</li>
                        <li><strong>Finalités limitées :</strong> La collecte et le traitement des données sont exécutés pour répondre à un ou plusieurs objectifs déterminés dans les présentes conditions générales d'utilisation.</li>
                        <li><strong>Minimisation de la collecte et du traitement des données :</strong> Seules les données nécessaires à la bonne exécution des objectifs poursuivis par le site sont collectées.</li>
                        <li><strong>Intégrité et confidentialité des données collectées et traitées :</strong> Le responsable du traitement des données s'engage à garantir l'intégrité et la confidentialité des données collectées.</li>
                    </ul>
                </article>

                <article>
                    <h3>ARTICLE 3 : DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES DANS LE CADRE DE LA NAVIGATION SUR LE SITE</h3>
                    <p>Les données à caractère personnel collectées sur le site de Fabrice LEMAITRE sont les suivantes :</p>
                    <ul>
                        <li><strong>Via le formulaire de contact :</strong> Nom, prénom, adresse email, numéro de téléphone, et le contenu du message.</li>
                        <li><strong>Via le formulaire de témoignage :</strong> Nom et le contenu du témoignage.</li>
                    </ul>
                    <p>Ces données sont collectées lorsque l'utilisateur effectue l'une des opérations suivantes sur le site :</p>
                    <ul>
                        <li>L'utilisateur remplit et envoie le formulaire de contact.</li>
                        <li>L'utilisateur remplit et envoie le formulaire de soumission de témoignage.</li>
                    </ul>
                    <p>Le responsable du traitement conservera l'ensemble des données collectées pour une durée strictement nécessaire à la finalité de la prise de contact ou de la gestion du témoignage, et dans le respect de la réglementation en vigueur.</p>
                </article>

                <article>
                    <h3>ARTICLE 4 : RESPONSABLE DU TRAITEMENT DES DONNÉES</h3>
                    <p>Le responsable du traitement des données à caractère personnel est : <strong>Fabrice LEMAITRE</strong>. Il peut être contacté par email à l'adresse suivante : <strong>[Email du client]</strong>.</p>
                    <p>Le responsable du traitement des données est chargé de déterminer les finalités et les moyens mis au service du traitement des données à caractère personnel.</p>
                </article>

                <article>
                    <h3>ARTICLE 5 : DROITS DE L'UTILISATEUR</h3>
                    <p>En application de la réglementation, l'Utilisateur possède les droits ci-après énumérés :</p>
                    <ul>
                        <li>Droit d'accès, de rectification et droit à l'effacement de ses données ;</li>
                        <li>Droit à la limitation et d'opposition au traitement de ses données ;</li>
                        <li>Droit à la portabilité de ses données.</li>
                    </ul>
                    <p>Pour exercer ces droits, l'Utilisateur peut adresser sa demande au responsable du traitement à l'adresse email : <strong>[Email du client]</strong>.</p>
                </article>

                <article>
                    <h3>ARTICLE 6 : UTILISATION DES FICHIERS "COOKIES"</h3>
                    <p>Le site n'utilise pas de "cookies" de suivi ou de mesure d'audience nécessitant le consentement de l'utilisateur. Seuls des cookies techniques, strictement nécessaires au bon fonctionnement du site, peuvent être utilisés.</p>
                </article>

                <article>
                    <h3>ARTICLE 7 : CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ</h3>
                    <p>L'éditeur du site se réserve le droit de modifier la présente Politique à tout moment afin d'assurer sa conformité avec le droit en vigueur. L'utilisateur est donc invité à venir consulter régulièrement cette politique de confidentialité afin de se tenir informé des derniers changements qui lui seront apportés.</p>
                    <p>Il est porté à la connaissance de l'utilisateur que la dernière mise à jour de la présente politique de confidentialité est intervenue le : 30/07/2025.</p>
                </article>

            </div>
        </div>
    );
}