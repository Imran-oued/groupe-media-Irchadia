"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Education() {
  const [formData, setFormData] = useState({
    nomComplet: '',
    age: '',
    programme: 'cours-vacances',
    session: 'session-1',
    telephone: '',
    ville: 'Ouagadougou',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const programmes = [
    {
      id: "cours-vacances",
      titre: "Cours de Vacances Islamiques",
      public: "Enfants & Adolescents (6 à 18 ans)",
      periode: "Juillet - Août (Période des vacances scolaires)",
      description: "Un programme intensif et ludique pour initier les jeunes aux valeurs de l'Islam : apprentissage des règles de la prière (Salât), des invocations quotidiennes, des bonnes manières (Adab) et mémorisation de courtes sourates.",
      points: [
        "Mémorisation des Juz 'Amma",
        "Apprentissage pratique de la purification et de la prière",
        "Histoires des Prophètes et éducation morale",
        "Activités d'éveil et concours de récitation récompensés"
      ],
      badge: "Inscriptions Ouvertes",
      color: "border-brand-green"
    },
    {
      id: "coran-tajweed",
      titre: "Enseignement du Saint Coran & Tajweed",
      public: "Tous âges (Enfants, Jeunes et Adultes)",
      periode: "Toute l'année (Séances en semaine et week-ends)",
      description: "Formation continue encadrée par des enseignants et maîtres coraniques qualifiés pour perfectionner la prononciation correcte des lettres arabes et les règles d'embellissement de la récitation (Tajweed).",
      points: [
        "Correction phonétique et règles de Tajweed pas à pas",
        "Parcours de mémorisation personnalisée (Hifz)",
        "Révision et consolidation des acquis",
        "Classes adaptées aux débutants et aux niveaux avancés"
      ],
      badge: "Programme Continu",
      color: "border-brand-purple"
    },
    {
      id: "langue-arabe",
      titre: "Langue Arabe & Sciences Islamiques",
      public: "Jeunes et Adultes",
      periode: "Sessions trimestrielles",
      description: "Apprentissage de la langue du Coran pour comprendre les textes sacrés et s'initier aux bases de la jurisprudence (Fiqh simplifié), de la croyance authentique ('Aqîdah) et de la Sunna prophétique.",
      points: [
        "Lecture, écriture et compréhension de l'arabe littéraire",
        "Vocabulaire religieux usuel et grammaire pratique",
        "Initiation au Fiqh de l'adoration au quotidien",
        "Supports pédagogiques et polycopiés fournis"
      ],
      badge: "Nouveau Module",
      color: "border-brand-yellow"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-green-100 text-brand-green mb-4">
            Pôle Formation — Groupe Média IRCHADI-YA
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Éducation & <span className="text-brand-purple">Formation</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Conformément à notre mission d&apos;éducation islamique et de transmission des valeurs éthiques, retrouvez l&apos;ensemble de nos programmes d&apos;enseignement coranique et nos cours de vacances à Ouagadougou.
          </p>
        </div>

        {/* Grille des 3 programmes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {programmes.map((prog) => (
            <div 
              key={prog.id} 
              className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-t-8 ${prog.color} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {prog.badge}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Burkina Faso</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{prog.titre}</h3>
                <p className="text-sm font-semibold text-brand-green mb-1">Public : {prog.public}</p>
                <p className="text-xs text-gray-500 mb-4 font-medium italic">{prog.periode}</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{prog.description}</p>
                
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">Au programme :</h4>
                  <ul className="space-y-2">
                    {prog.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-700">
                        <svg className="w-4 h-4 text-brand-green mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href="#inscription"
                onClick={() => setFormData({ ...formData, programme: prog.id })}
                className="mt-4 w-full text-center py-2.5 px-4 rounded-lg bg-brand-purple hover:bg-purple-900 text-white font-medium text-sm transition-colors shadow-sm"
              >
                S&apos;inscrire à ce programme
              </a>
            </div>
          ))}
        </div>

        {/* Section Inscription / Formulaire */}
        <div id="inscription" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Colonne d'infos */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-purple to-purple-950 text-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">Formulaire Officiel</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4">
                  Pré-inscription en ligne
                </h2>
                <p className="text-purple-200 text-sm sm:text-base leading-relaxed mb-8">
                  Remplissez ce formulaire pour réserver une place pour vous ou votre enfant. Notre équipe pédagogique prendra contact avec vous sous 24 à 48 heures pour confirmer l&apos;inscription et vous communiquer les détails pratiques.
                </p>

                <div className="space-y-4 text-sm text-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <span>Ouagadougou, Burkina Faso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>(+226) 67 27 42 32 / (+226) 58 96 98 67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>groupemediairchadiya@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-800 text-xs text-purple-300">
                Groupe Média IRCHADI-YA — Agréé & Reconnu pour l&apos;éducation islamique et citoyenne.
              </div>
            </div>

            {/* Formulaire interactif */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Demande bien reçue !</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    Merci pour votre confiance. L&apos;équipe pédagogique du Groupe Média IRCHADI-YA prendra contact avec vous très prochainement par téléphone ou WhatsApp.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-brand-purple text-white font-medium rounded-lg hover:bg-purple-900 transition-colors"
                  >
                    Faire une autre inscription
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nomComplet" className="block text-sm font-semibold text-gray-700 mb-1">
                      Nom et prénom de l&apos;apprenant *
                    </label>
                    <input 
                      type="text" 
                      id="nomComplet"
                      required
                      placeholder="Ex: Ouedraogo Aminata"
                      value={formData.nomComplet}
                      onChange={(e) => setFormData({ ...formData, nomComplet: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-1">
                        Âge de l&apos;apprenant *
                      </label>
                      <input 
                        type="text" 
                        id="age"
                        required
                        placeholder="Ex: 12 ans"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-1">
                        Téléphone / WhatsApp du parent ou tuteur *
                      </label>
                      <input 
                        type="tel" 
                        id="telephone"
                        required
                        placeholder="Ex: +226 70 00 00 00"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="programme" className="block text-sm font-semibold text-gray-700 mb-1">
                        Programme souhaité *
                      </label>
                      <select 
                        id="programme"
                        value={formData.programme}
                        onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm bg-white"
                      >
                        <option value="cours-vacances">Cours de vacances islamiques</option>
                        <option value="coran-tajweed">Saint Coran & Tajweed (Continu)</option>
                        <option value="langue-arabe">Langue Arabe & Sciences Islamiques</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="session" className="block text-sm font-semibold text-gray-700 mb-1">
                        Session & Horaires
                      </label>
                      <select 
                        id="session"
                        value={formData.session}
                        onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm bg-white"
                      >
                        <option value="session-1">Matinées (8h00 - 12h00)</option>
                        <option value="session-2">Après-midis (15h00 - 18h00)</option>
                        <option value="session-3">Week-ends (Samedi & Dimanche)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                      Remarques ou besoins particuliers (facultatif)
                    </label>
                    <textarea 
                      id="message"
                      rows={3}
                      placeholder="Niveau coranique actuel, objectifs ou informations complémentaires..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-brand-green hover:bg-emerald-700 text-white font-bold text-base transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Valider la pré-inscription</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Les informations recueillies sont strictement confidentielles et réservées à l&apos;administration pédagogique.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
