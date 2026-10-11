import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  const latestNews = [
    {
      id: 1,
      title: "Lancement officiel de la plateforme numérique du Groupe Média IRCHADI-YA",
      excerpt: "Découvrez notre nouveau portail d'information et de diffusion religieuse, conçu pour éclairer la communauté et répondre aux exigences du CSC.",
      date: "28 Septembre 2026",
      category: "Société & Oummah",
      href: "/actualites"
    },
    {
      id: 2,
      title: "Tafsîr du Saint Coran : Exégèse détaillée de la Sourate Al-Baqarah",
      excerpt: "Méditation sur les enseignements majeurs de la piété et les règles de vie fraternelle transmises lors des assises hebdomadaires.",
      date: "24 Septembre 2026",
      category: "Religion & Spiritualité",
      href: "/media"
    },
    {
      id: 3,
      title: "Inscriptions ouvertes pour les cours d'apprentissage coranique & Tajweed",
      excerpt: "Le pôle Éducation & Formation lance ses nouvelles sessions d'enseignement du Coran et de langue arabe pour enfants et adultes.",
      date: "18 Septembre 2026",
      category: "Éducation & Jeunesse",
      href: "/education"
    }
  ];

  const featuredActivities = [
    {
      title: "Éducation & Cours de Vacances",
      subtitle: "Apprentissage du Coran & Tajweed",
      description: "Programmes intensifs de vacances et cours continus pour enfants et adultes afin de maîtriser la récitation du Coran et les règles de la prière.",
      link: "/education",
      cta: "Découvrir les programmes",
      color: "from-emerald-700 to-green-900",
      badge: "Inscriptions Ouvertes"
    },
    {
      title: "Émissions & Production Vidéo",
      subtitle: "Conférences & Tafsîr Hebdomadaires",
      description: "Captation audiovisuelle, diffusions de conférences religieuses et émissions pédagogiques synchronisées avec notre chaîne YouTube.",
      link: "/media",
      cta: "Accéder à la médiathèque",
      color: "from-purple-800 to-indigo-950",
      badge: "Multimédia"
    },
    {
      title: "Presse en Ligne & Journal",
      subtitle: "Information Responsable & Éthique",
      description: "Articles d'analyse, chroniques sociétales et reportages au service de la paix, de la tolérance et de la cohésion nationale au Burkina Faso.",
      link: "/actualites",
      cta: "Lire le journal",
      color: "from-amber-600 to-yellow-800",
      badge: "Dossiers Spéciaux"
    }
  ];

  return (
    <>
      <Hero />

      {/* Bannière À la Une / Édito */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900 via-purple-950 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-4 border border-brand-yellow/30">
                <span>★</span>
                <span>À la Une — Groupe Média IRCHADI-YA</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-4">
                « La lumière de l&apos;Islam dans toute sa gloire »
              </h2>
              <p className="text-purple-200 text-base sm:text-lg leading-relaxed mb-6">
                Fondé lors du mois de Ramadan 1444 H (2023) à Ouagadougou, notre organe de presse œuvre chaque jour pour une information vérifiée, la formation de la jeunesse et l&apos;union fraternelle des musulmans dans le respect des valeurs républicaines et islamiques.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/about" 
                  className="px-6 py-3 rounded-xl bg-brand-green hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-md"
                >
                  Découvrir notre histoire & nos 6 fondateurs
                </Link>
                <Link 
                  href="/actualites" 
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all backdrop-blur-sm border border-white/20"
                >
                  Consulter les actualités
                </Link>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden lg:block">
              <svg className="w-80 h-80 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 22h20L12 2zm0 3.83L18.17 19H5.83L12 5.83z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section Dernières Vidéos en Vedette */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
                Audiovisuel & YouTube
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                Dernières Émissions & Vidéos
              </h2>
              <p className="text-gray-500 text-base mt-1">
                Suivez nos assises de Tafsîr et conférences religieuses en vidéo haute définition.
              </p>
            </div>
            <Link 
              href="/media"
              className="inline-flex items-center text-brand-purple hover:text-purple-900 font-bold text-sm"
            >
              Voir toute la médiathèque →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-200">
            {/* Vidéo principale intégrée */}
            <div className="lg:col-span-7">
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-black">
                <iframe
                  src="https://www.youtube.com/embed/O-mgt6KCqk8?si=Xq1q5JH76gN8VjJD"
                  title="Tafsîr du Saint Coran - Sourate Al-Baqarah"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Détails et appels à l'action */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-purple uppercase tracking-wider">
                  Tafsîr du Saint Coran
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                  Exégèse de la Sourate Al-Baqarah
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Une étude méthodique des enseignements divins, abordant la foi sincère, l&apos;éthique fraternelle et la préservation de la cohésion sociale au quotidien.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-medium">Rejoignez-nous sur nos réseaux officiels :</p>
                <div className="flex flex-wrap gap-2">
                  <a 
                    href="https://youtube.com/@groupemediairchadi-ya?feature=shared" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors shadow-sm"
                  >
                    Chaîne YouTube
                  </a>
                  <a 
                    href="https://www.tiktok.com/@irchadiyamedia?_r=1&_t=ZS-9A1vBtRjVC6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black hover:bg-gray-800 text-white font-semibold text-xs transition-colors shadow-sm"
                  >
                    TikTok Officiel
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1Aai29JEiL/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-sm"
                  >
                    Page Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Derniers Articles d'Actualité */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-purple-100 px-3 py-1 rounded-full">
                Journalisme & Éthique
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                Dernières Publications & Actualités
              </h2>
              <p className="text-gray-500 text-base mt-1">
                L&apos;actualité religieuse, sociale et communautaire au Burkina Faso et dans le monde musulman.
              </p>
            </div>
            <Link 
              href="/actualites"
              className="inline-flex items-center text-brand-purple hover:text-purple-900 font-bold text-sm"
            >
              Tous les articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <div 
                key={news.id} 
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-brand-green flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-400">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-brand-purple transition-colors leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-gray-50">
                  <Link href={news.href} className="text-brand-purple font-bold text-sm hover:text-purple-950 flex items-center transition-colors">
                    Lire l&apos;article complet
                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Mise en avant des Activités Majeures (Cahier des charges) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-green-100 px-3 py-1 rounded-full">
              Pôles d&apos;Activités Majeures
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
              Nos Actions au Cœur de la Communauté
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg">
              De la formation coranique à la production audiovisuelle, découvrez comment le Groupe Média IRCHADI-YA concrétise ses engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredActivities.map((act, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`h-3 w-16 rounded-full bg-gradient-to-r ${act.color} mb-6`}></div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {act.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-brand-purple transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-green mb-4">{act.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {act.description}
                  </p>
                </div>
                <Link 
                  href={act.link}
                  className="w-full text-center py-3 rounded-xl bg-gray-50 hover:bg-brand-purple text-gray-800 hover:text-white font-bold text-sm transition-all duration-200 border border-gray-200 hover:border-brand-purple"
                >
                  {act.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
