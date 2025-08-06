// src/app/mentions-legales/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales - Fabrice Lemaitre",
    // noindex pour éviter que les moteurs de recherche n'indexent cette page
    robots: {
        index: false,
        follow: true,
    },
};

export default function MentionsLegalesPage() {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 max-w-4xl prose lg:prose-xl">
                <h1>Mentions Légales</h1>

                <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

                <h2>Édition du site</h2>
                <p>
                    Le présent site, accessible à l'URL [Adresse de votre site web], est édité par :
                    <br />
                    <strong>Fabrice LEMAITRE</strong>, exerçant en tant qu'entrepreneur individuel, domicilié(e) à Combles (80360), de nationalité française.
                    <br />
                    N° SIRET : 81772423000013
                    <br />
                    Adresse e-mail : [Email du client]
                    <br />
                    Numéro de téléphone : 06.43.61.82.80
                </p>

                <h2>Hébergement</h2>
                <p>
                    Le Site est hébergé par la société Vercel.
                    <br />
                    Adresse : [Adresse de l'hébergeur]
                    <br />
                    Contact : [Numéro de téléphone ou email de l'hébergeur]
                </p>

                <h2>Directeur de publication</h2>
                <p>
                    Le Directeur de la publication du Site est <strong>Fabrice LEMAITRE</strong>.
                </p>

                <h2>Nous contacter</h2>
                <p>
                    Par téléphone : 06.43.61.82.80
                    <br />
                    Par email : [Email du client]
                </p>
            </div>
        </div>
    );
}