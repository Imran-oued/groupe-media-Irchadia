export default function Media() {
  // LISTE DES VIDÉOS : C'est ici que vous ajoutez vos vidéos !
  const videos = [
    {
      id: 1,
      title: "Tafsîr du Saint Coran - Sourate Al-Baqarah",
      embedUrl: "https://www.youtube.com/embed/O-mgt6KCqk8?si=Xq1q5JH76gN8VjJD", // <-- COLLEZ LE LIEN ICI
    },
    {
      id: 2,
      title: "Conférence : La place de la jeunesse en Islam",
      embedUrl: "" // Laissez vide s'il n'y a pas encore de vidéo
    },
    {
      id: 3,
      title: "Sermon du Vendredi : L'importance de la fraternité",
      embedUrl: ""
    },
    {
      id: 4,
      title: "Émission : Comprendre sa religion au quotidien",
      embedUrl: ""
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Notre <span className="text-brand-purple">Médiathèque</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Retrouvez ici nos articles, reportages et vidéos.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 border-b pb-4 gap-4">
            <h3 className="text-2xl font-bold text-gray-900">Dernières Vidéos</h3>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://youtube.com/@groupemediairchadi-ya?feature=shared" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
                Chaîne YouTube
              </a>
              <a 
                href="https://www.tiktok.com/@irchadiyamedia?_r=1&_t=ZS-9A1vBtRjVC6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-black text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.99v7.91c-.01 2.38-.95 4.7-2.61 6.36-1.65 1.67-4 2.61-6.39 2.6-2.4 0-4.73-.95-6.39-2.61-1.66-1.67-2.6-3.99-2.58-6.39.02-2.39.96-4.71 2.63-6.36 1.67-1.66 3.99-2.6 6.38-2.6.38 0 .76.03 1.14.08v4.11c-.38-.1-.77-.15-1.16-.14-1.3-.01-2.58.53-3.48 1.45-.91.92-1.42 2.19-1.41 3.49.01 1.3.54 2.56 1.46 3.47.92.9 2.19 1.41 3.49 1.4 1.3-.01 2.56-.53 3.46-1.45.91-.92 1.42-2.2 1.41-3.51V.02z" />
                </svg>
                TikTok
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="group">
                {video.embedUrl ? (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-sm">
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
                  <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer">
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      À venir
                    </span>
                    <div className="w-12 h-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-brand-red ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                <h4 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-brand-green transition-colors line-clamp-2">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Articles Récents</h3>
          <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200 border-dashed">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun article publié</h3>
            <p className="mt-1 text-sm text-gray-500">Les nouveaux articles apparaîtront ici prochainement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
