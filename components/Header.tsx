// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Me Connaître', href: '/me-connaitre' },
  { name: 'Interventions', href: '/interventions' },
  { name: 'La Séance', href: '/seance' },
  { name: 'Témoignages', href: '/temoignages' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[var(--background)] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
              Fabrice Lemaitre
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-[var(--primary)] ${
                    isActive ? 'text-[var(--primary)] font-bold' : 'text-[var(--foreground)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
                href="/contact" 
                className={`font-bold py-2 px-4 rounded-lg transition-colors text-white ${
                    pathname === '/contact'
                    ? 'bg-[var(--primary)] ring-2 ring-offset-2 ring-[var(--accent)]'
                    : 'bg-[var(--accent)] hover:bg-[var(--primary)]'
                }`}
            >
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--accent)]"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive ? 'bg-green-100 text-[var(--primary)] font-bold' : 'text-[var(--foreground)] hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium transition-colors text-white ${
                pathname === '/contact'
                  ? 'bg-[var(--primary)]'
                  : 'bg-[var(--accent)] hover:bg-[var(--primary)]'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}