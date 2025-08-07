// src/app/contact/page.tsx
'use client';

// Imports de React et des bibliothèques externes
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Imports des composants Next.js
import Image from 'next/image';

// 1. Définition du schéma de validation avec Zod
const validationSchema = z.object({
  prenom: z.string().min(1, { message: 'Le prénom est requis' }),
  nom: z.string().min(1, { message: 'Le nom est requis' }),
  email: z.string().min(1, { message: "L'email est requis" }).email({ message: "L'email doit être valide" }),
  telephone: z.string().optional(),
  message: z.string().min(5, { message: 'Le message doit contenir au moins 5 caractères' }),
});

// On déduit le type TypeScript du formulaire à partir du schéma Zod
type ValidationSchema = z.infer<typeof validationSchema>;

export default function ContactPage() {
  const [responseMessage, setResponseMessage] = useState('');

  // 2. Initialisation du hook de formulaire avec Zod et le mode 'onBlur'
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'onBlur',
  });

  // 3. Fonction de soumission qui envoie les données à l'API
  const onSubmit: SubmitHandler<ValidationSchema> = async (formData) => {
    setResponseMessage('');

    const dataToSend = {
      name: `${formData.prenom} ${formData.nom}`,
      email: formData.email,
      phone: formData.telephone,
      message: formData.message,
    };

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    });

    const data = await response.json();

    if (response.ok) {
      setResponseMessage('Merci ! Votre message a bien été envoyé.');
      reset(); // Vider le formulaire après succès
    } else {
      setResponseMessage(data.message || 'Une erreur est survenue.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
          Disponibilités & Contact
        </h1>
      </div>
      <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* --- COLONNE DE GAUCHE : INFOS --- */}
        <div className="space-y-10">

          <div className="bg-[var(--color-card-background)] rounded-xl overflow-hidden ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/fabrice4.jpg"
                  alt="Portrait de Fabrice Lemaitre"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[var(--primary)]">Fabrice Lemaitre</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Magnétiseur & Coupeur de Feu</p>
                <a
                  href="https://www.google.com/maps?q=28+bis+rue+de+Péronne+Combles+80360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-gray-500 hover:underline"
                >
                  28 bis rue de Péronne Combles (803600), Hauts-de-France
                </a>

              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">Horaires des rendez-vous</h3>
              <ul className="text-lg list-none md:list-disc md:list-inside">
                <li>Les vendredis après-midi de 13H30 à 19h</li>
                <li>Le samedi de 9H à 17h</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">Prise de contact par téléphone</h3>
              <p className="text-lg">
                Je suis joignable le soir après 17h au <strong className="whitespace-nowrap">06.43.61.82.80</strong>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">Adresse du cabinet</h3>
              <a
                href="https://www.google.com/maps?q=28+bis+rue+de+Péronne+Combles+80360"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-gray-500 hover:underline"
              >
                28 bis rue de Péronne Combles (803600), Hauts-de-France
              </a>

            </div>
          </div>
        </div>

        {/* --- COLONNE DE DROITE : FORMULAIRE --- */}
        <div className="bg-[var(--color-card-background)] p-8 rounded-lg shadow-lg ">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Envoyez-moi un message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium">Prénom</label>
                <input type="text" id="prenom" {...register("prenom")} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent)] focus:border-[var(--accent)]" />
                {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom.message}</p>}
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-medium">Nom</label>
                <input type="text" id="nom" {...register("nom")} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent)] focus:border-[var(--accent)]" />
                {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Adresse email</label>
              <input type="email" id="email" {...register("email")} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent)] focus:border-[var(--accent)]" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium">Téléphone</label>
              <input type="tel" id="telephone" {...register("telephone")} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent)] focus:border-[var(--accent)]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea id="message" rows={5} {...register("message")} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--accent)] focus:border-[var(--accent)]"></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-[var(--accent)] text-white font-bold py-3 px-6 rounded-lg hover:bg-[var(--primary)] transition-colors disabled:bg-gray-400">
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </div>
            {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}
          </form>
          <p className="mt-6 text-xs text-gray-500">
            Conformément à la loi informatique et liberté en date du 6 janvier 1978 vous disposez d'un droit d'accès, de rectification, de modification et de suppression de données qui vous concernent. Vous pouvez exercer ce droit en nous envoyant un courrier électronique ou postal.
          </p>
        </div>
      </div>
    </div>
  );
}