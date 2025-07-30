// src/app/contact/page.tsx
'use client';

import { useForm, SubmitHandler } from 'react-hook-form'; // 1. On importe les outils
import { zodResolver } from '@hookform/resolvers/zod'; // Le connecteur entre Zod et React Hook Form
import { z } from 'zod'; // La bibliothèque de validation
import { useState } from 'react';
import Image from 'next/image';

// 2. On définit le schéma de validation avec Zod
const validationSchema = z.object({
  prenom: z.string().min(1, { message: 'Le prénom est requis' }),
  nom: z.string().min(1, { message: 'Le nom est requis' }),
  email: z.string().min(1, { message: 'L\'email est requis' }).email({ message: 'L\'email doit être valide' }),
  telephone: z.string().optional(),
  message: z.string().min(5, { message: 'Le message doit contenir au moins 5 caractères' }),
});

// On déduit le type de nos données depuis le schéma Zod
type ValidationSchema = z.infer<typeof validationSchema>;

export default function ContactPage() {
  const [responseMessage, setResponseMessage] = useState('');

  // 3. On initialise le hook de formulaire
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'onBlur',
  });

  // 4. La fonction de soumission est maintenant plus simple
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
      reset(); // On vide le formulaire
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
      <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">
        {/* ... (La partie gauche avec l'image et les infos ne change pas) ... */}
        <div className="space-y-12">
          <div className="flex justify-center">
            <Image
              src="/images/fabrice-lemaitre.jpg"
              alt="Portrait de Fabrice Lemaitre"
              width={256}
              height={256}
              className="rounded-full shadow-lg object-cover"
            />
          </div>
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-3">Horaires des rendez-vous</h2>
              <p className="text-lg">Les rendez-vous ont lieu :</p>
              <ul className="text-lg list-none md:list-disc md:list-inside mt-2">
                <li>Les vendredis après-midi de 13H30 à 19h</li>
                <li>Le samedi de 9H à 17h</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-3">Prise de contact par téléphone</h2>
              <p className="text-lg">
                Je suis joignable le soir après 17h au <strong className="whitespace-nowrap">06.43.61.82.80</strong>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-3">Adresse du cabinet</h2>
              <p className="text-lg">Combles (80360), région Hauts de France</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Envoyez-moi un message</h2>

            {/* 5. On connecte le formulaire à la fonction handleSubmit */}
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
    </div>
  );
}
