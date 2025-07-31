// src/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-center space-x-2 text-sm">
            <button onClick={() => setTheme('light')} className={theme === 'light' ? 'font-bold' : ''}>Clair</button>
            <span>/</span>
            <button onClick={() => setTheme('dark')} className={theme === 'dark' ? 'font-bold' : ''}>Sombre</button>
        </div>
    );
}