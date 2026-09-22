export default function Media() {
  // LISTE DES VIDÉOS : C'est ici que vous ajoutez vos vidéos !
  const videos = [
    {
      id: 1,
      title: "Tafsîr du Saint Coran - Sourate Al-Baqarah",
      embedUrl: "https://www.youtube.com/embed/AVrNHI4RdPM?si=x4jxwjS-6MZqrHqD", // <-- COLLEZ LE LIEN ICI
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Dernières Vidéos</h3>
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
