"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-4">
              <Image 
                src="/logo.jpg" 
                alt="Logo Groupe Média IRCHADI-YA" 
                width={85} 
                height={85} 
                className="object-contain mix-blend-multiply contrast-125 saturate-[1.25] brightness-105 drop-shadow-sm transition-transform hover:scale-105"
              />
              <span className="font-extrabold text-xl tracking-tight hidden sm:block leading-tight">
                <span className="text-brand-purple">GROUPE MÉDIA</span><br/>
                <span className="text-brand-green">IRCHADI-YA</span>
              </span>
            </Link>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <Link href="/" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">Accueil</Link>
            <Link href="/actualites" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">Actualités</Link>
            <Link href="/media" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">Émissions & Vidéos</Link>
            <Link href="/education" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">Éducation & Formation</Link>
            <Link href="/services" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">Départements</Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">À Propos</Link>
            <Link href="/contact" className="px-4 py-2 rounded-md bg-brand-yellow text-white hover:bg-yellow-600 transition-colors font-semibold shadow-sm">Contact</Link>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-brand-green focus:outline-none p-2"
              aria-label="Menu principal"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md">Accueil</Link>
            <Link href="/actualites" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md">Actualités</Link>
            <Link href="/media" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md">Émissions & Vidéos</Link>
            <Link href="/education" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md">Éducation & Formation</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md">Départements</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md">À Propos</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 mt-2 text-base font-semibold text-center rounded-md bg-brand-yellow text-white hover:bg-yellow-600 transition-colors shadow-sm">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
