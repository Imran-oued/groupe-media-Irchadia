import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-brand-purple mb-4">
            Direction Générale des Affaires Juridiques — CSC
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Conformité Légale & <span className="text-brand-purple">Mentions Officielles</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Fiche technique d&apos;identification du média de presse en ligne conforme aux exigences du Conseil Supérieur de la Communication (CSC) du Burkina Faso.
          </p>
        </div>

        {/* Fiche Technique Officielle */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden mb-12">
          <div className="bg-brand-purple text-white p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold">Fiche Technique d&apos;Identification (Dossier CSC)</h2>
            <p className="text-purple-200 text-sm mt-1">Conformément aux dispositions régissant la déclaration des organes de presse en ligne au Burkina Faso.</p>
          </div>

          <div className="p-6 sm:p-10 divide-y divide-gray-100 space-y-6">
            
            <div className="pt-4 first:pt-0 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">1. Dénomination de l&apos;Organe :</span>
              <div className="md:col-span-2 text-base font-semibold text-gray-900">
                Groupe Média IRCHADI-YA (GMI)
                <p className="text-xs font-normal text-gray-500 mt-0.5">Fondé en Ramadan 1444 H (2023) à Ouagadougou.</p>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">2. Devise Officielle :</span>
              <div className="md:col-span-2 text-base font-semibold text-brand-green italic">
                « La lumière de l&apos;Islam dans toute sa gloire »
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">3. Directeur Général & Directeur de Publication :</span>
              <div className="md:col-span-2 text-base font-semibold text-gray-900">
                M. OUEDRAOGO Abdoul Moubarack
                <p className="text-xs font-normal text-gray-500 mt-0.5">Responsable légal et éditorial de la publication en ligne.</p>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">4. Siège Social & Situation Géographique :</span>
              <div className="md:col-span-2 text-base font-semibold text-gray-900">
                Ouagadougou, Burkina Faso
                <p className="text-xs font-normal text-gray-500 mt-0.5">Tél : (+226) 67 27 42 32 / (+226) 58 96 98 67</p>
                <p className="text-xs font-normal text-gray-500">Email : groupemediairchadiya@gmail.com</p>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">5. Nom de Domaine Officiel (URL) :</span>
              <div className="md:col-span-2 text-base font-semibold text-brand-purple">
                https://irchadi-ya-media.com
                <p className="text-xs font-normal text-gray-500 mt-0.5">Protocole sécurisé SSL/HTTPS actif.</p>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">6. Prestataire d&apos;Hébergement :</span>
              <div className="md:col-span-2 text-base font-semibold text-gray-900">
                Hostinger International Ltd
                <p className="text-xs font-normal text-gray-500 mt-0.5">Infrastructure Cloud sécurisée avec certification SSL Let&apos;s Encrypt.</p>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">7. Collège des Fondateurs :</span>
              <div className="md:col-span-2 text-sm text-gray-700 space-y-1">
                <p>• M. OUEDRAOGO Abdoul Moubarack (Directeur Général)</p>
                <p>• Direction des Programmes & Production Audiovisuelle</p>
                <p>• Rédacteur en Chef & Information</p>
                <p>• Pôle Éducation Coranique & Tajweed</p>
                <p>• Administration, Finances & Logistique</p>
                <p>• Communication Digitale & Relations Publiques</p>
              </div>
            </div>

          </div>
        </div>

        {/* Charte déontologique */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-xl font-bold text-gray-900">Engagement Déontologique & Protection des Données</h3>
          <p>
            Le Groupe Média IRCHADI-YA s&apos;engage à respecter les principes cardinaux du journalisme au Burkina Faso : la vérification rigoureuse des faits, la rectification loyale de toute erreur, le respect de la dignité humaine et le refus formel de tout discours incitant à la haine, à la discorde ou au fanatisme.
          </p>
          <p>
            Les données personnelles transmises via nos formulaires d&apos;inscription aux cours ou de contact sont strictement confidentielles et ne font l&apos;objet d&apos;aucune cession à des tiers.
          </p>
          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <Link 
              href="/"
              className="text-brand-purple hover:text-purple-950 font-bold text-sm inline-flex items-center gap-1"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
