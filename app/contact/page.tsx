// src/app/contact/page.tsx
'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import Image from 'next/image';

// Schéma de validation
const validationSchema = z.object({
  prenom: z.string().min(1, { message: 'Le prénom est requis' }),
  nom: z.string().min(1, { message: 'Le nom est requis' }),
  email: z.string().min(1, { message: 'L\'email est requis' }).email({ message: 'L\'email doit être valide' }),
  telephone: z.string().optional(),
  message: z.string().min(5, { message: 'Le message doit contenir au moins 5 caractères' }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export default function ContactPage() {
  const [responseMessage, setResponseMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (formData) => {
    // ... (votre logique d'envoi d'email reste la même)
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
          Disponibilités & Contact
        </h1>
      </div>
      <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Colonne de gauche : Carte de présentation + Infos pratiques */}
        <div className="space-y-10">

          {/* NOUVELLE CARTE DE PRÉSENTATION AVEC L'IMAGE */}
          <div className="bg-white  overflow-hidden ">
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
                <p className="mt-4 text-sm text-gray-500">Combles (80360), Hauts-de-France</p>
              </div>
            </div>
          </div>

          {/* Infos pratiques */}
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
          </div>
        </div>

        {/* Colonne de droite : Formulaire */}
        <div className="bg-white p-8 rounded-lg shadow-lg ">
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
            Conformément à la loi informatique et liberté...
          </p>
        </div>
      </div>
    </div>
  );
}