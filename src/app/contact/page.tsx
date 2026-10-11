"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    sujet: 'general',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-brand-purple mb-4">
            Direction & Rédaction
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Contactez le Groupe Média <span className="text-brand-purple">IRCHADI-YA</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Une question sur nos publications, une demande de couverture médiatique ou une inscription à nos programmes de formation ? Notre équipe est à votre entière disposition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonne Coordonnées & Réseaux */}
          <div className="lg:col-span-5 bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nos Coordonnées
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green mr-4 flex-shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Siège Social</h3>
                  <p className="text-gray-600 text-sm mt-1">Ouagadougou, Burkina Faso</p>
                  <p className="text-xs text-gray-400 mt-0.5">Direction Générale : M. OUEDRAOGO Abdoul Moubarack</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-brand-purple/10 rounded-xl text-brand-purple mr-4 flex-shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Lignes Téléphoniques</h3>
                  <p className="text-gray-600 text-sm mt-1 font-semibold">(+226) 67 27 42 32</p>
                  <p className="text-gray-600 text-sm font-semibold">(+226) 58 96 98 67</p>
                  <p className="text-xs text-gray-400 mt-0.5">Appels & WhatsApp disponibles</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-brand-yellow/10 rounded-xl text-brand-yellow mr-4 flex-shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Courrier Électronique</h3>
                  <p className="text-brand-purple text-sm font-medium mt-1 break-all">
                    groupemediairchadiya@gmail.com
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Réponse garantie sous 24h ouvrées</p>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux Officiels */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Nos Canaux Numériques Officiels :
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://www.facebook.com/share/1Aai29JEiL/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600">Facebook</p>
                    <p className="text-xs text-gray-500">Page officielle d&apos;actualités et diffusions</p>
                  </div>
                </a>

                <a 
                  href="https://youtube.com/@groupemediairchadi-ya?feature=shared" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-red-500 hover:bg-red-50/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-red-600">YouTube</p>
                    <p className="text-xs text-gray-500">Chaîne des émissions, conférences et Tafsîr</p>
                  </div>
                </a>

                <a 
                  href="https://www.tiktok.com/@irchadiyamedia?_r=1&_t=ZS-9A1vBtRjVC6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-black hover:bg-gray-100/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.99v7.91c-.01 2.38-.95 4.7-2.61 6.36-1.65 1.67-4 2.61-6.39 2.6-2.4 0-4.73-.95-6.39-2.61-1.66-1.67-2.6-3.99-2.58-6.39.02-2.39.96-4.71 2.63-6.36 1.67-1.66 3.99-2.6 6.38-2.6.38 0 .76.03 1.14.08v4.11c-.38-.1-.77-.15-1.16-.14-1.3-.01-2.58.53-3.48 1.45-.91.92-1.42 2.19-1.41 3.49.01 1.3.54 2.56 1.46 3.47.92.9 2.19 1.41 3.49 1.4 1.3-.01 2.56-.53 3.46-1.45.91-.92 1.42-2.2 1.41-3.51V.02z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-black">TikTok</p>
                    <p className="text-xs text-gray-500">Courts formats et rappels spirituels</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Colonne Formulaire */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Envoyez-nous un Message
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Remplissez ce formulaire et notre équipe rédactionnelle ou administrative vous répondra dans les plus brefs délais.
            </p>

            {sent ? (
              <div className="text-center py-12 bg-green-50 rounded-2xl p-8 border border-green-200">
                <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé avec succès !</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                  Merci de nous avoir contactés. Nous avons bien reçu votre message et y répondrons sous peu.
                </p>
                <button 
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 bg-brand-purple text-white font-medium rounded-lg hover:bg-purple-900 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                      Adresse email *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="nom@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-1">
                      Téléphone (facultatif)
                    </label>
                    <input 
                      type="tel" 
                      id="telephone"
                      placeholder="+226 ..."
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-semibold text-gray-700 mb-1">
                    Objet de votre demande
                  </label>
                  <select
                    id="sujet"
                    value={formData.sujet}
                    onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm bg-white"
                  >
                    <option value="general">Renseignement général</option>
                    <option value="presse">Demande de couverture médiatique / Reportage</option>
                    <option value="education">Inscription ou information Éducation & Cours</option>
                    <option value="partenariat">Partenariat & Sponsoring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                    Votre message *
                  </label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    placeholder="Écrivez votre message ici..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-purple hover:bg-purple-950 text-white font-bold text-base transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Envoyer le message</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
