// src/app/api/testimonials/route.ts
import { createClient } from '@sanity/client';
import { NextResponse } from 'next/server';

// ... (votre configuration du client reste la même)
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-03-07',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

export async function POST(request: Request) {
    console.log("1. L'API a été appelée."); // LOG 1
    try {
        const { name, text } = await request.json();
        console.log("2. Données reçues du formulaire :", { name, text }); // LOG 2

        if (!name || !text) {
            return NextResponse.json({ message: 'Nom et texte sont requis.' }, { status: 400 });
        }

        console.log("3. Tentative de création du document dans Sanity..."); // LOG 3
        const result = await client.create({
            _type: 'testimonial',
            name: name,
            text: text,
            isApproved: false,
        });
        console.log("4. Document créé avec succès ! ID du document :", result._id); // LOG 4

        return NextResponse.json({ message: 'Témoignage envoyé avec succès !' }, { status: 200 });

    } catch (error) {
        console.error("!!! ERREUR CÔTÉ API !!!:", error); // LOG D'ERREUR (LE PLUS IMPORTANT)
        const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue.';
        return NextResponse.json({ message: 'Impossible de soumettre le témoignage.', error: errorMessage }, { status: 500 });
    }
}