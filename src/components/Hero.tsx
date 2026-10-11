import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-purple-50/50 via-white to-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Colonne Texte & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-brand-purple text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span>Plateforme d&apos;Information & Communication Islamique</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              <span>GROUPE MÉDIA</span><br/>
              <span className="text-brand-purple">IRCHADI-YA</span>
            </h1>

            <p className="mt-4 text-base sm:text-xl font-bold text-brand-green italic tracking-wide">
              « La lumière de l&apos;Islam dans toute sa gloire »
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Fondé en <strong>Ramadan 1444 H (2023)</strong> à Ouagadougou. Organe de presse dédié à l&apos;information responsable, l&apos;enseignement du Saint Coran, la production audiovisuelle et le rassemblement de la Oummah.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link 
                href="/actualites" 
                className="px-6 py-3.5 rounded-xl bg-brand-purple hover:bg-purple-900 text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Consulter les Actualités
              </Link>
              <Link 
                href="/education" 
                className="px-6 py-3.5 rounded-xl bg-brand-green hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Éducation & Cours de Vacances
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3.5 rounded-xl bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold text-sm sm:text-base transition-all"
              >
                À Propos (6 Fondateurs)
              </Link>
            </div>

            {/* Badges de confiance */}
            <div className="mt-10 pt-8 border-t border-gray-200/60 flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-brand-green font-bold">✓</span>
                <span>Conforme Cahier des Charges CSC</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-green font-bold">✓</span>
                <span>Fondé en Ramadan 1444 H</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-green font-bold">✓</span>
                <span>Ouagadougou, Burkina Faso</span>
              </div>
            </div>
          </div>

          {/* Colonne Illustration Décorative */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-tr from-purple-900 via-brand-purple to-indigo-800 p-8 shadow-2xl flex flex-col justify-between text-white overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold tracking-widest text-brand-yellow uppercase">GMI Officiel</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm">Burkina Faso</span>
                </div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  La voix d&apos;une information éclairée
                </h3>
                <p className="text-xs text-purple-200 mt-2">
                  Tafsîr • Conférences • Éducation Coranique • Débats & Société
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-purple-400/30">
                <div className="flex justify-between items-center text-xs">
                  <div>
                    <p className="text-purple-300">Diffusion Globale</p>
                    <p className="font-bold text-white mt-0.5">YouTube • TikTok • Facebook</p>
                  </div>
                  <Link 
                    href="/media" 
                    className="p-3 bg-brand-yellow text-gray-950 font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-md"
                    aria-label="Accéder aux vidéos"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Effet de motif islamique géométrique subtil en arrière-plan */}
              <div className="absolute -right-12 -top-12 opacity-10 pointer-events-none">
                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h20L12 2zm0 3.83L18.17 19H5.83L12 5.83z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
