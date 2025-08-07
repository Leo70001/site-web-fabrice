'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CookieConsent from 'react-cookie-consent';

export default function CookieBanner() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevents SSR rendering

    return (
        <CookieConsent
            location="bottom"
            buttonText="J'accepte"
            declineButtonText="Je refuse"
            enableDeclineButton
            cookieName="CookieConsent"
            style={{ background: '#2B373B', fontSize: '15px' }}
            buttonStyle={{
                color: '#4e503b',
                fontSize: '13px',
                background: '#e1e1e1',
                borderRadius: '5px',
            }}
            declineButtonStyle={{ borderRadius: '5px' }}
            expires={150}
        >
            Ce site utilise des cookies pour analyser le trafic et améliorer votre expérience.{' '}
            <Link
                href="/politique-de-confidentialite"
                className="text-yellow-300 hover:underline"
            >
                En savoir plus.
            </Link>
        </CookieConsent>
    );
}
