export default function Services() {
  const departments = [
    {
      name: "Média et Communication",
      description: "Information en temps réel, reportages, interviews et analyses de l'actualité à travers le prisme de l'éthique islamique.",
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
      color: "bg-brand-purple"
    },
    {
      name: "Éducation et Formation islamique",
      description: "Programmes éducatifs, cours de religion, Tafsîr, apprentissage du Coran et de la Sunna pour tous les âges.",
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
      color: "bg-brand-green"
    },
    {
      name: "Événementiel",
      description: "Organisation de conférences, séminaires, cérémonies religieuses et événements culturels pour la communauté.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "bg-brand-yellow"
    },
    {
      name: "Production audiovisuelle",
      description: "Réalisation d'émissions, documentaires, courts-métrages et captation vidéo professionnelle de vos événements.",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      color: "bg-brand-red"
    },
    {
      name: "Communication digitale",
      description: "Gestion de réseaux sociaux, création de contenu web, campagnes digitales et stratégies de visibilité en ligne.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      color: "bg-blue-600"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24 flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-purple tracking-wide uppercase">Nos Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Les Départements du Groupe
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Découvrez nos pôles d&apos;expertise dédiés à la promotion des valeurs islamiques à travers divers canaux.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md hover:shadow-xl transition-shadow border-t-4 border-gray-100 hover:border-brand-green">
                  <div className="-mt-6">
                    <div>
                      <span className={`inline-flex items-center justify-center p-3 ${dept.color} rounded-md shadow-lg`}>
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={dept.icon} />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-bold text-gray-900 tracking-tight">{dept.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {dept.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
