// src/app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ message: 'Les champs nom, email et message sont requis.' }, { status: 400 });
        }

        await resend.emails.send({
            from: 'contact@coupeur-de-feu-magnetiseur-fabrice-lemaitre.fr', // Pour le test. Remplacez par votre email de domaine vérifié en production.
            to: 'fabricelemaitremagnetiseur@gmail.com.com', // Remplacez par l'adresse email de votre client
            subject: `Nouveau message de ${name} via le site web`,
            html: `
        <h1>Nouveau message depuis le formulaire de contact</h1>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non fourni'}</p>
        <hr>
        <h2>Message :</h2>
        <p>${message}</p>
      `
        });

        return NextResponse.json({ message: 'Email envoyé avec succès !' }, { status: 200 });

    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
        return NextResponse.json({ message: 'Impossible d\'envoyer l\'email.' }, { status: 500 });
    }
}