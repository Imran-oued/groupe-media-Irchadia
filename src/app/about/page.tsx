export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-green tracking-wide uppercase">À Propos</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Qui sommes-nous ?
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Créé lors du Ramadan 1444 H (2023), le Groupe Média IRCHADI-YA est dédié à l&apos;information et l&apos;éducation selon les valeurs islamiques.
          </p>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <div className="px-6 py-8 sm:p-10 lg:p-12">
            <h3 className="text-2xl font-bold text-brand-purple mb-4">Mot du Directeur Général</h3>
            <p className="text-lg text-gray-700 italic mb-6">
              &quot;Notre mission est d&apos;éclairer la Oummah à travers une information juste, une éducation saine et une communication qui rassemble. Nous croyons en un monde où les valeurs de l&apos;Islam contribuent activement à la paix et au développement.&quot;
            </p>
            <p className="font-semibold text-gray-900">— M. OUEDRAOGO Abdoul Moubarack, Directeur Général</p>
          </div>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-green text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-xl leading-6 font-bold text-gray-900">Notre Vision</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Devenir le média de référence au Burkina Faso et au-delà pour une information authentique et une éducation islamique de qualité.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-yellow text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="ml-16 text-xl leading-6 font-bold text-gray-900">Notre Mission</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Informer avec professionnalisme, éduquer avec sagesse et promouvoir les valeurs de paix, de tolérance et de fraternité.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-red text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-xl leading-6 font-bold text-gray-900">Nos Valeurs</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Paix, Justice, Fraternité, Tolérance, Vivre-ensemble, Professionnalisme et Responsabilité.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
