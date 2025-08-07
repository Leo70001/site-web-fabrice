'use client';

import { useState } from 'react';

export default function SubmitTestimonialPage() {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');
        setError('');

        try {
            const response = await fetch('/api/testimonials', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, text }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Merci ! Votre témoignage a été envoyé et est en attente de modération.');
                setName('');
                setText('');
            } else {
                setError(data.message || 'Une erreur est survenue.');
            }
        } catch (err) {
            setError('Une erreur réseau est survenue.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto max-w-2xl px-4 py-16 sm:py-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-[var(--primary)]">Laisser un témoignage</h1>
                <p className="mt-4 text-lg">Partagez votre expérience pour aider d&apos;autres personnes.</p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md border"
                noValidate
            >
                <div>
                    <label
                        htmlFor="name"
                        className="block font-medium text-gray-800"
                    >
                        Votre Prénom et l&apos;initiale de votre nom
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                        placeholder="Ex: Marie D."
                    />
                </div>

                <div>
                    <label
                        htmlFor="text"
                        className="block font-medium text-gray-800"
                    >
                        Votre témoignage
                    </label>
                    <textarea
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                        rows={6}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                        placeholder="Décrivez votre expérience..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--accent)] text-white font-bold py-3 px-6 rounded-lg hover:bg-[var(--primary)] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon témoignage'}
                </button>

                {message && (
                    <p className="text-center text-green-600" role="alert" aria-live="polite">
                        {message}
                    </p>
                )}

                {error && (
                    <p className="text-center text-red-600" role="alert" aria-live="assertive">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
}
