"use client";

import { useState } from 'react';

export default function Media() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = [
    "Tous",
    "Tafsîr du Saint Coran",
    "Conférences & Débats",
    "Sermons du Vendredi",
    "Pèlerinage (Hajj & Omra)",
    "Émissions Jeunesse"
  ];

  // Liste des émissions & vidéos synchronisées
  const videos = [
    {
      id: 1,
      title: "Tafsîr du Saint Coran - Sourate Al-Baqarah",
      category: "Tafsîr du Saint Coran",
      duration: "45 min",
      speaker: "Direction des Enseignements",
      embedUrl: "https://www.youtube.com/embed/O-mgt6KCqk8?si=Xq1q5JH76gN8VjJD",
      description: "Exégèse approfondie des versets sacrés de la Sourate Al-Baqarah, les règles morales et l'édification de la piété."
    },
    {
      id: 2,
      title: "Conférence : La place et la responsabilité de la jeunesse en Islam",
      category: "Conférences & Débats",
      duration: "52 min",
      speaker: "Erudits invités — Ouagadougou",
      embedUrl: "",
      description: "Comment la jeunesse musulmane peut concilier foi, études, éthique professionnelle et engagement civique au Burkina Faso."
    },
    {
      id: 3,
      title: "Sermon du Vendredi : L'importance vitale de la fraternité et de la paix",
      category: "Sermons du Vendredi",
      duration: "30 min",
      speaker: "Imam & Prêcheur GMI",
      embedUrl: "",
      description: "Khoutbah spéciale appelant à la concorde fraternelle, au pardon mutuel et au soutien des nécessiteux."
    },
    {
      id: 4,
      title: "Reportage Spécial : Témoignages et retours du pèlerinage aux Lieux Saints",
      category: "Pèlerinage (Hajj & Omra)",
      duration: "38 min",
      speaker: "Cellule Reportages & Documentaires",
      embedUrl: "",
      description: "Immersion auprès des fidèles burkinabè de retour du Hajj, entre émotions, rites sacrés et conseils pour préserver les grâces."
    },
    {
      id: 5,
      title: "Émission : Comprendre et pratiquer sa religion au quotidien",
      category: "Émissions Jeunesse",
      duration: "25 min",
      speaker: "Département Audiovisuel",
      embedUrl: "",
      description: "Réponses claires et pédagogiques aux questions pratiques sur les actes d'adoration, la pureté et les relations sociales."
    },
    {
      id: 6,
      title: "L'éthique islamique des affaires et du travail",
      category: "Conférences & Débats",
      duration: "40 min",
      speaker: "Commission des Débats Religieux",
      embedUrl: "",
      description: "Principes d'honnêteté, de justice contractuelle et de licéité des gains dans le commerce contemporain."
    }
  ];

  const filteredVideos = selectedCategory === "Tous" 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-brand-purple mb-4">
            Galerie Audiovisuelle & Chaîne Officielle
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Émissions & <span className="text-brand-purple">Vidéos</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-500">
            Retrouvez nos conférences, séances de Tafsîr, prêches et reportages synchronisés avec notre chaîne officielle YouTube et nos réseaux.
          </p>
        </div>

        {/* Liens vers les chaînes officielles */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-purple-900 rounded-3xl p-6 sm:p-10 mb-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">Réseaux Officiels GMI</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">Rejoignez notre communauté en ligne</h2>
            <p className="text-purple-200 text-sm mt-2 max-w-xl">
              Abonnez-vous à notre chaîne YouTube et suivez notre compte TikTok pour ne rien manquer de nos diffusions en direct et de nos capsules éducatives.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a 
              href="https://youtube.com/@groupemediairchadi-ya?feature=shared" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-bold transition-all shadow-md hover:scale-105"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
              S&apos;abonner sur YouTube
            </a>
            <a 
              href="https://www.tiktok.com/@irchadiyamedia?_r=1&_t=ZS-9A1vBtRjVC6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-3 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-bold transition-all shadow-md hover:scale-105 border border-gray-700"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.99v7.91c-.01 2.38-.95 4.7-2.61 6.36-1.65 1.67-4 2.61-6.39 2.6-2.4 0-4.73-.95-6.39-2.61-1.66-1.67-2.6-3.99-2.58-6.39.02-2.39.96-4.71 2.63-6.36 1.67-1.66 3.99-2.6 6.38-2.6.38 0 .76.03 1.14.08v4.11c-.38-.1-.77-.15-1.16-.14-1.3-.01-2.58.53-3.48 1.45-.91.92-1.42 2.19-1.41 3.49.01 1.3.54 2.56 1.46 3.47.92.9 2.19 1.41 3.49 1.4 1.3-.01 2.56-.53 3.46-1.45.91-.92 1.42-2.2 1.41-3.51V.02z" />
              </svg>
              Suivre sur TikTok
            </a>
          </div>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-brand-purple text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille des vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredVideos.map((video) => (
            <div 
              key={video.id} 
              className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {video.embedUrl ? (
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 to-purple-950 flex flex-col items-center justify-center p-6 text-center group cursor-pointer">
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-yellow text-gray-900">
                      Prochaine Diffusion
                    </span>
                    <span className="absolute bottom-3 right-3 text-xs bg-black/70 text-white px-2 py-1 rounded">
                      {video.duration}
                    </span>
                    <div className="w-14 h-14 bg-white/20 group-hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-xs text-purple-200 mt-3">Disponible sur notre chaîne YouTube</p>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span className="font-bold text-brand-green">{video.category}</span>
                    <span>{video.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug hover:text-brand-purple transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-500 italic font-medium">{video.speaker}</span>
                <a 
                  href="https://youtube.com/@groupemediairchadi-ya?feature=shared"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  Regarder sur YouTube
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
