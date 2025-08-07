// src/components/Analytics.tsx
'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Analytics() {
    const [consent, setConsent] = useState(false);

    useEffect(() => {
        const checkConsent = () => {
            const consentCookie = Cookies.get('CookieConsent');
            setConsent(consentCookie === 'true');
        };

        // Vérifier immédiatement au chargement
        checkConsent();

        // Vérifier périodiquement au cas où l'utilisateur change d'avis
        const interval = setInterval(checkConsent, 1000);

        return () => clearInterval(interval);
    }, []);

    return consent ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} /> : null;
}