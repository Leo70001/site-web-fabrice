import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales - Fabrice Lemaitre",
    robots: {
        index: false,
        follow: true,
    },
};

export default function MentionsLegalesPage() {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 max-w-4xl prose prose-blue lg:prose-xl">
                <h1>Mentions légales</h1>

                <p>
                    Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
                    dans l’économie numérique, il est précisé aux utilisateurs du site
                    l’identité des différents intervenants dans le cadre de sa
                    réalisation et de son suivi.
                </p>

                <h2>Édition du site</h2>
                <p>
                    Le présent site, accessible à l&apos;URL <strong>https://votresite.fr</strong>, est édité par :
                </p>
                <address>
                    <strong>Fabrice LEMAITRE</strong>, entrepreneur individuel<br />
                    Domicilié à : 28 bis rue de Péronne, 80360 Combles, France<br />
                    N° SIRET : 817 724 230 00013<br />
                    Téléphone : <a href="tel:0643618280">06 43 61 82 80</a><br />
                    Email : <a href="mailto:fabricelemaitremagnetiseur@gmail.com">fabricelemaitremagnetiseur@gmail.com</a>
                </address>

                <h2>Hébergement</h2>
                <p>
                    Le site est hébergé par la société :
                </p>
                <address>
                    <strong>Vercel Inc.</strong><br />
                    440 N Barranca Ave #4133,<br />
                    Covina, CA 91723, États-Unis<br />
                    Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
                </address>

                <h2>Directeur de la publication</h2>
                <p>
                    Le directeur de la publication est : <strong>Fabrice LEMAITRE</strong>
                </p>

                <h2>Me contacter</h2>
                <p>
                    Par téléphone : <a href="tel:0643618280">06 43 61 82 80</a><br />
                    Par email : <a href="mailto:fabricelemaitremagnetiseur@gmail.com">fabricelemaitremagnetiseur@gmail.com</a>
                </p>
            </div>
        </div>
    );
}