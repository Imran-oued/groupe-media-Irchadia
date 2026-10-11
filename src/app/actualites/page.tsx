"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Actualites() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  const categories = [
    "Tous",
    "Société & Oummah",
    "Religion & Spiritualité",
    "Éducation & Jeunesse",
    "Événements au Burkina"
  ];

  const articles = [
    {
      id: 1,
      titre: "Lancement officiel de la plateforme numérique du Groupe Média IRCHADI-YA",
      categorie: "Société & Oummah",
      date: "28 Septembre 2026",
      auteur: "La Rédaction",
      tempsLecture: "4 min",
      resume: "Dans le cadre de son plan de digitalisation (Axe 1) et de sa conformité avec les exigences du Conseil Supérieur de la Communication (CSC), le Groupe Média IRCHADI-YA franchit un cap historique avec son nouveau portail en ligne.",
      contenuComplet: `Fondé lors du mois béni de Ramadan 1444 H (2023) à Ouagadougou, le Groupe Média IRCHADI-YA poursuit avec détermination son ambition d'éclairer la communauté musulmane et l'opinion publique nationale.\n\nCe nouveau portail internet permet une diffusion fluide et continue des enseignements religieux (Tafsîr, prêches, conférences), tout en offrant à la rédaction les outils modernes d'un journalisme responsable et professionnel.\n\n« Notre engagement est d'unir les musulmans et de promouvoir le vivre-ensemble dans le strict respect des valeurs islamiques et des lois républicaines », a rappelé M. OUEDRAOGO Abdoul Moubarack, Directeur Général du Groupe.`,
      imageGradient: "from-purple-900 to-indigo-800"
    },
    {
      id: 2,
      titre: "Tafsîr du Saint Coran : Méditation profonde sur la Sourate Al-Baqarah",
      categorie: "Religion & Spiritualité",
      date: "24 Septembre 2026",
      auteur: "Département Éducation",
      tempsLecture: "6 min",
      resume: "Retour sur la dernière session d'exégèse coranique animée au siège du groupe. Les érudits ont explicité les fondements de la foi, la patience dans les épreuves et l'importance de la concorde fraternelle.",
      contenuComplet: `La Sourate Al-Baqarah constitue le cœur battant de la législation islamique et des principes moraux. Durant cette assise hebdomadaire, retransmise également sur la chaîne YouTube du groupe, les intervenants ont mis en lumière les leçons intemporelles de cette sourate majeure.\n\nL'assistance nombreuse et les fidèles en ligne ont pu poser des questions pratiques sur l'application de ces préceptes dans le contexte contemporain burkinabè. Les vidéos complètes sont désormais consultables dans notre médiathèque.`,
      imageGradient: "from-emerald-900 to-teal-800"
    },
    {
      id: 3,
      titre: "Bilan des cours de vacances islamiques et perspectives pour l'année scolaire",
      categorie: "Éducation & Jeunesse",
      date: "18 Septembre 2026",
      auteur: "Cellule Pédagogique",
      tempsLecture: "5 min",
      resume: "Plusieurs dizaines d'élèves ont achevé avec succès la session intensive d'apprentissage coranique et d'initiation morale organisée durant les vacances scolaires à Ouagadougou.",
      contenuComplet: `La cérémonie de clôture a été marquée par la récitation émouvante du Coran par les jeunes lauréats et la remise d'attestations et de prix d'encouragement.\n\nLes parents ont exprimé leur vive gratitude envers l'équipe pédagogique d'IRCHADI-YA pour la rigueur morale et la bienveillance apportées aux enfants. Les inscriptions pour les cours continus du week-end et de soutien coranique sont à présent ouvertes.`,
      imageGradient: "from-amber-900 to-yellow-800"
    },
    {
      id: 4,
      titre: "Le rôle des médias islamiques dans la consolidation de la paix au Burkina Faso",
      categorie: "Société & Oummah",
      date: "12 Septembre 2026",
      auteur: "Chronique Religieuse",
      tempsLecture: "7 min",
      resume: "Analyse sur la responsabilité éthique et civique de la presse confessionnelle pour renforcer la cohésion sociale, la solidarité et la résilience collective.",
      contenuComplet: `Dans une époque traversée par de multiples défis, la presse en ligne confessionnelle a pour devoir fondamental de semer la paix, la tolérance et la vérité. Le Groupe Média IRCHADI-YA réaffirme sa charte éditoriale : une information vérifiée, un discours apaisant et un attachement inébranlable aux valeurs de fraternité prônées par l'Islam.`,
      imageGradient: "from-blue-950 to-slate-800"
    },
    {
      id: 5,
      titre: "Préparatifs et conseils spirituels pour le retour des pèlerins",
      categorie: "Événements au Burkina",
      date: "05 Septembre 2026",
      auteur: "Cellule Reportages",
      tempsLecture: "4 min",
      resume: "Guide pratique et spirituel pour préserver les bienfaits du grand pèlerinage et perpétuer les vertus d'humilité et de piété au sein de son foyer.",
      contenuComplet: `L'accomplissement du Hajj et de la Omra marque un renouveau spirituel pour le fidèle. Notre équipe vous propose une série d'interviews et de témoignages de pèlerins burkinabè partageant leurs émotions et leurs résolutions pour maintenir la flamme de la dévotion.`,
      imageGradient: "from-rose-950 to-red-900"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchCategory = selectedCategory === "Tous" || article.categorie === selectedCategory;
    const matchSearch = article.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        article.resume.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre et introduction */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-brand-purple mb-4">
            Presse en ligne & Journalisme Responsable
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Actualités & <span className="text-brand-purple">Média</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Retrouvez nos enquêtes, reportages et réflexions pour une information vérifiée, éclairée par la sagesse et les valeurs de l&apos;Islam.
          </p>
        </div>

        {/* Barre de recherche et catégories */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Rechercher un article, un thème..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              {filteredArticles.length} article(s) trouvé(s)
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-purple text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article 
              key={art.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between border border-gray-100"
            >
              <div>
                {/* Carte d'illustration stylisée */}
                <div className={`h-48 bg-gradient-to-br ${art.imageGradient} p-6 flex flex-col justify-between text-white relative`}>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/30 backdrop-blur-sm">
                      {art.categorie}
                    </span>
                    <span className="text-xs opacity-90">{art.tempsLecture}</span>
                  </div>
                  <div>
                    <span className="text-xs text-purple-200">Groupe Média IRCHADI-YA</span>
                    <p className="text-xs text-white/80 mt-0.5">{art.date}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-brand-purple transition-colors line-clamp-2">
                    {art.titre}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {art.resume}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Par {art.auteur}</span>
                <button
                  onClick={() => setActiveArticle(art.id)}
                  className="inline-flex items-center gap-1.5 text-brand-purple hover:text-purple-950 font-bold text-sm transition-colors"
                >
                  Lire l&apos;article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal de lecture d'article complet */}
        {activeArticle !== null && (() => {
          const art = articles.find(a => a.id === activeArticle);
          if (!art) return null;
          return (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
                
                <div className={`p-8 bg-gradient-to-br ${art.imageGradient} text-white relative rounded-t-3xl`}>
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                    aria-label="Fermer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-black/30 mb-4">
                    {art.categorie}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4">
                    {art.titre}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs text-purple-200">
                    <span>Publié le {art.date}</span>
                    <span>•</span>
                    <span>Par {art.auteur}</span>
                    <span>•</span>
                    <span>Temps de lecture : {art.tempsLecture}</span>
                  </div>
                </div>

                <div className="p-8 space-y-6 text-gray-700 leading-relaxed text-base">
                  <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-brand-purple font-medium text-purple-900">
                    {art.resume}
                  </div>
                  <div className="whitespace-pre-line space-y-4">
                    {art.contenuComplet}
                  </div>

                  <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-xs text-gray-500">Partager cet article sur nos réseaux :</span>
                    <div className="flex gap-3">
                      <a 
                        href="https://www.facebook.com/share/1Aai29JEiL/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Facebook
                      </a>
                      <a 
                        href="https://youtube.com/@groupemediairchadi-ya?feature=shared" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors"
                      >
                        YouTube
                      </a>
                      <a 
                        href="https://www.tiktok.com/@irchadiyamedia?_r=1&_t=ZS-9A1vBtRjVC6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-black text-white text-xs font-semibold hover:bg-gray-800 transition-colors"
                      >
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
}
