import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne 1 : Présentation & Devise */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white p-2 rounded-xl shadow-md inline-flex items-center justify-center h-[80px] w-[80px] transition-transform hover:scale-105">
                <Image 
                  src="/logo.jpg" 
                  alt="Logo IRCHADI-YA" 
                  width={75} 
                  height={75} 
                  className="object-contain mix-blend-multiply contrast-125 saturate-[1.25] brightness-105" 
                />
              </div>
              <h3 className="text-lg font-extrabold leading-tight text-brand-yellow">
                Groupe Média<br/>IRCHADI-YA
              </h3>
            </div>
            <p className="text-xs text-brand-green font-bold uppercase tracking-wider mb-2">
              « La lumière de l&apos;Islam dans toute sa gloire »
            </p>
            <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
              Fondé en Ramadan 1444 H (2023) à Ouagadougou. Organe de presse dédié à l&apos;information, l&apos;éducation et la communication islamique au Burkina Faso.
            </p>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h4 className="text-base font-bold mb-4 text-brand-green uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-purple-100">
              <li><Link href="/" className="hover:text-brand-yellow transition-colors">Accueil</Link></li>
              <li><Link href="/actualites" className="hover:text-brand-yellow transition-colors">Actualités & Journal</Link></li>
              <li><Link href="/media" className="hover:text-brand-yellow transition-colors">Émissions & Vidéos</Link></li>
              <li><Link href="/education" className="hover:text-brand-yellow transition-colors">Éducation & Formation</Link></li>
              <li><Link href="/services" className="hover:text-brand-yellow transition-colors">Départements</Link></li>
              <li><Link href="/about" className="hover:text-brand-yellow transition-colors">À Propos & 6 Fondateurs</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact & Localisation */}
          <div>
            <h4 className="text-base font-bold mb-4 text-brand-yellow uppercase tracking-wider">Contact & Siège</h4>
            <div className="space-y-2 text-xs sm:text-sm text-purple-100 leading-relaxed">
              <p className="font-semibold text-white">Ouagadougou, Burkina Faso</p>
              <p>Tél : (+226) 67 27 42 32</p>
              <p>Tél : (+226) 58 96 98 67</p>
              <p className="break-all">Email : groupemediairchadiya@gmail.com</p>
              <p className="mt-2 text-xs text-purple-300">
                Direction Générale : M. OUEDRAOGO Abdoul Moubarack
              </p>
            </div>
          </div>

          {/* Colonne 4 : Réseaux sociaux & Légalité */}
          <div>
            <h4 className="text-base font-bold mb-4 text-brand-red uppercase tracking-wider">Suivez-nous</h4>
            <p className="text-xs text-purple-200 mb-4">
              Restez connectés à nos actualités et vidéos quotidiennes sur nos canaux officiels :
            </p>
            <div className="flex space-x-3 mb-6">
              <a 
                href="https://www.facebook.com/share/1Aai29JEiL/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://youtube.com/@groupemediairchadi-ya?feature=shared" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@irchadiyamedia?_r=1&_t=ZS-9A1vBtRjVC6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.99v7.91c-.01 2.38-.95 4.7-2.61 6.36-1.65 1.67-4 2.61-6.39 2.6-2.4 0-4.73-.95-6.39-2.61-1.66-1.67-2.6-3.99-2.58-6.39.02-2.39.96-4.71 2.63-6.36 1.67-1.66 3.99-2.6 6.38-2.6.38 0 .76.03 1.14.08v4.11c-.38-.1-.77-.15-1.16-.14-1.3-.01-2.58.53-3.48 1.45-.91.92-1.42 2.19-1.41 3.49.01 1.3.54 2.56 1.46 3.47.92.9 2.19 1.41 3.49 1.4 1.3-.01 2.56-.53 3.46-1.45.91-.92 1.42-2.2 1.41-3.51V.02z" />
                </svg>
              </a>
            </div>
            
            <div className="pt-2 border-t border-purple-800">
              <Link 
                href="/mentions-legales"
                className="text-xs text-brand-yellow hover:underline block"
              >
                Conformité CSC (Dossier Presse en Ligne)
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-purple-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300 gap-4">
          <p>&copy; {new Date().getFullYear()} Groupe Média IRCHADI-YA (GMI). Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales & CSC</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contactez la Rédaction</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
