import Link from 'next/link';

export default function About() {
  const fondateurs = [
    {
      nom: "M. OUEDRAOGO Abdoul Moubarack",
      role: "Directeur Général & Fondateur",
      mission: "Coordination générale, orientation stratégique, partenariats institutionnels et représentation légale auprès du Conseil Supérieur de la Communication (CSC).",
      iconBg: "bg-brand-purple"
    },
    {
      nom: "Directeur des Programmes & Production",
      role: "Co-fondateur — Pôle Audiovisuel",
      mission: "Supervision technique de la réalisation, captation des conférences, tournages d'émissions de Tafsîr et diffusion multimédia.",
      iconBg: "bg-brand-green"
    },
    {
      nom: "Rédacteur en Chef",
      role: "Co-fondateur — Information & Ligne Éditoriale",
      mission: "Vérification des sources journalistiques, coordination de la rédaction web et respect de la déontologie journalistique et islamique.",
      iconBg: "bg-brand-yellow"
    },
    {
      nom: "Responsable Pôle Éducation Coranique",
      role: "Co-fondateur — Enseignement & Formation",
      mission: "Organisation des cours de vacances, encadrement pédagogique des classes de Tajweed, récitation et langue arabe.",
      iconBg: "bg-emerald-700"
    },
    {
      nom: "Responsable Administratif & Financier",
      role: "Co-fondateur — Gestion & Logistique",
      mission: "Suivi budgétaire, gestion administrative, intendance matérielle et relation avec les partenaires opérationnels.",
      iconBg: "bg-brand-red"
    },
    {
      nom: "Responsable Communication Digitale",
      role: "Co-fondateur — Réseaux & Visibilité",
      mission: "Administration des plateformes web, community management (YouTube, Facebook, TikTok) et diffusion en continu.",
      iconBg: "bg-indigo-700"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero À Propos */}
      <div className="bg-gradient-to-b from-purple-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-brand-purple mb-4">
            Historique & Organisation
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
            Groupe Média <span className="text-brand-purple">IRCHADI-YA</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-brand-green italic">
            « La lumière de l&apos;Islam dans toute sa gloire »
          </p>
          <p className="max-w-3xl mt-6 mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            Fondé lors du mois béni de <strong>Ramadan 1444 H (2023)</strong> à Ouagadougou, le Groupe Média IRCHADI-YA est un média privé burkinabè dédié à l&apos;information, l&apos;éducation et la communication islamique au service de la Oummah et de la société.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Mot du Directeur Général */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-20 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">Message de la Direction Générale</span>
            <blockquote className="mt-4 text-lg sm:text-2xl font-medium leading-relaxed italic text-purple-100">
              &quot;Dans un monde en pleine mutation numérique, notre devoir est d&apos;offrir à notre peuple et à toute la communauté une source d&apos;information crédible, responsable et profondément attachée aux valeurs universelles de l&apos;Islam : la paix, la justice, la fraternité et le respect des lois. C&apos;est dans cette optique que s&apos;inscrit notre démarche d&apos;obtention de l&apos;agrément officiel de presse en ligne auprès du Conseil Supérieur de la Communication (CSC).&quot;
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center font-bold text-gray-900 text-lg shadow-md">
                OM
              </div>
              <div>
                <p className="text-lg font-bold text-white">M. OUEDRAOGO Abdoul Moubarack</p>
                <p className="text-sm text-purple-300">Directeur Général — Groupe Média IRCHADI-YA</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 22h20L12 2zm0 3.83L18.17 19H5.83L12 5.83z" />
            </svg>
          </div>
        </div>

        {/* Vision, Mission, Valeurs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nos Piliers Fondamentaux
            </h2>
            <p className="mt-2 text-gray-500">
              Les principes qui guident notre ligne éditoriale et nos actions au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-8 border-brand-green hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-brand-green">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Notre Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Devenir l&apos;organe médiatique de référence au Burkina Faso et en Afrique de l&apos;Ouest pour une information saine, constructive et une diffusion authentique de la foi musulmane.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border-t-8 border-brand-purple hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-brand-purple">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Notre Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Informer avec professionnalisme, éduquer avec sagesse et unir les musulmans dans le respect de leurs valeurs sacrées, tout en favorisant le dialogue civique et la cohésion nationale.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border-t-8 border-brand-yellow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 text-brand-yellow">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nos Valeurs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vérité, Responsabilité, Tolérance, Fraternité, Paix, Vivre-ensemble et Intégrité morale.
              </p>
            </div>
          </div>
        </div>

        {/* Organisation administrative : Les 6 Fondateurs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-purple-50 px-3 py-1 rounded-full">
              Gouvernance & Équipe Dirigeante
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-3">
              L&apos;Organisation Administrative (Les 6 Fondateurs)
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500">
              Conformément aux statuts et à la charte d&apos;organisation du Groupe Média IRCHADI-YA, la gouvernance repose sur un collège de 6 membres fondateurs dévoués.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fondateurs.map((fond, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${fond.iconBg} text-white flex items-center justify-center font-bold text-sm shadow-sm`}>
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">{fond.nom}</h4>
                      <p className="text-xs font-semibold text-brand-green">{fond.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {fond.mission}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>Membre Fondateur</span>
                  <span>Ouagadougou, BF</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conformité CSC */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-green-100 px-3 py-1 rounded-full">
              Cadre Réglementaire
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 mb-4">
              Conformité avec le Conseil Supérieur de la Communication (CSC)
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Le Groupe Média IRCHADI-YA respecte scrupuleusement la réglementation en vigueur au Burkina Faso régissant la presse en ligne. Notre hébergement officiel sécurisé, notre nom de domaine réservé (<code>irchadi-ya-media.com</code>) et notre structure rédactionnelle sont calibrés pour garantir l&apos;obtention et le maintien de notre agrément de presse en ligne.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/mentions-legales"
                className="px-6 py-2.5 rounded-lg bg-brand-purple hover:bg-purple-900 text-white font-medium text-sm transition-colors shadow-sm"
              >
                Consulter la Fiche Technique CSC & Mentions Légales
              </Link>
              <Link 
                href="/contact"
                className="px-6 py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium text-sm transition-colors"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
